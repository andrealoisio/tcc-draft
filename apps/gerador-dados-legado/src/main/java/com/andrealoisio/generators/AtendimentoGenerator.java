package com.andrealoisio.generators;

import com.andrealoisio.entities.Associado;
import com.andrealoisio.entities.Atendimento;
import com.andrealoisio.utils.GeradorTexto;
import com.andrealoisio.utils.LiteraisAleatorias;
import com.github.javafaker.Faker;
import io.quarkus.hibernate.orm.panache.PanacheQuery;
import io.quarkus.logging.Log;
import io.quarkus.panache.common.Sort;
import io.quarkus.scheduler.Scheduled;
import org.postgresql.geometric.PGpoint;
import org.apache.commons.lang3.RandomStringUtils;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.sql.Date;
import java.util.Locale;
import java.util.Random;
import java.util.concurrent.TimeUnit;

@ApplicationScoped
public class AtendimentoGenerator {

    @Scheduled(every = "5s")
    @Transactional
    void insertAtendimento() {
        Log.info("Generating atendimento...");

        PanacheQuery<Associado> ultimosAssociados = Associado.findAll(Sort.descending("matricula"));
        ultimosAssociados.range(0,1);
        var associado = ultimosAssociados.list().stream().findFirst();
        if(associado.isPresent()) {
            Faker faker = new Faker(new Locale("pt-BR"));
            var atendimento = new Atendimento();
            atendimento.setDataAtendimento(faker.date().past(30, TimeUnit.DAYS));
            atendimento.setCid(RandomStringUtils.random(1, true, false) + String.valueOf(faker.random().nextInt(999)));
            atendimento.setDataRegistro(faker.date().past(60, TimeUnit.DAYS));
            atendimento.setSeqAssociado(associado.get().getMatricula());
            atendimento.setSituacao(GeradorTexto.retornaTextoAleatorio(LiteraisAleatorias.SITUACAO_ATENDIMENTO.getRetornoStrings()));
            atendimento.setCusto(BigDecimal.valueOf(faker.random().nextDouble()));
            atendimento.setObservacao(faker.gameOfThrones().quote());
            atendimento.setTipo(GeradorTexto.retornaTextoAleatorio(LiteraisAleatorias.TIPO_ATENDIMENTO.getRetornoStrings()));
            Log.info("Persisting atendimento ");
            //atendimento.persist();
            Log.info("Persisted atendimento " + atendimento.getSeqAtendimento());
        }
    }
}
