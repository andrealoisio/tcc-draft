package com.andrealoisio.generators;

import com.andrealoisio.entities.Atendimento;
import com.andrealoisio.entities.Autorizacao;
import com.andrealoisio.utils.GeradorTexto;
import com.andrealoisio.utils.LiteraisAleatorias;
import com.github.javafaker.Faker;
import io.quarkus.hibernate.orm.panache.PanacheQuery;
import io.quarkus.logging.Log;
import io.quarkus.panache.common.Sort;
import io.quarkus.scheduler.Scheduled;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import java.util.Locale;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@ApplicationScoped
public class AutorizacaoGenerator {
    @Scheduled(every = "8s")
    @Transactional
    void inserirAutorizacao() {
        Log.info("Genarating Autorizacao...");
        Faker faker = new Faker(new Locale("pt-BR"));

        Optional<Atendimento> atendimento = Atendimento.find("order by seq_atendimento desc").firstResultOptional();
        if (!atendimento.isPresent()) {
            return;
        }

        var autorizacao = new Autorizacao();
        autorizacao.setSeqAtendimento(atendimento.get().getSeqAtendimento());
        autorizacao.setDataRegistro(faker.date().past(30, TimeUnit.DAYS));
        autorizacao.setDataEntrada(faker.date().past(30, TimeUnit.DAYS));
        autorizacao.setDataAprovacao(faker.date().future(30, TimeUnit.DAYS));
        autorizacao.setDataVencimento(faker.date().future(30, TimeUnit.DAYS));
        autorizacao.setDataValidade(faker.date().future(30, TimeUnit.DAYS));
        autorizacao.setTipoAutorizacao(GeradorTexto.retornaTextoAleatorio(LiteraisAleatorias.TIPO_AUTORIZACAO.getRetornoStrings()));
        autorizacao.setEstaPago(true);
        autorizacao.setNomeAprovador(faker.name().fullName());
        autorizacao.setTelefoneAprovador(faker.phoneNumber().cellPhone());
        autorizacao.setCodigoAprovador(faker.random().nextInt(999999));
        autorizacao.setSituacao(GeradorTexto.retornaTextoAleatorio(LiteraisAleatorias.SITUACAO_AUTORIZACAO.getRetornoStrings()));
        autorizacao.setObservacao(faker.harryPotter().quote());
        autorizacao.persist();
        Log.info("Autorizacao persisted " + autorizacao.getCodigo());
    }
}