package com.andrealoisio.generators;

import com.andrealoisio.entities.Remocao;
import com.github.javafaker.Faker;
import io.quarkus.logging.Log;
import io.quarkus.scheduler.Scheduled;
import org.postgresql.geometric.PGpoint;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

@ApplicationScoped
public class RemocaoGenerator {
    @Scheduled(every = "8s")
    @Transactional
    void inserirRemocao() {
        Log.info("Genarating remocao...");
        Faker faker = new Faker(new Locale("pt-BR"));
        var remocao = new Remocao();
        //TODO: Paciente
        //remocao.setPaciente();
        remocao.setData_registro(faker.date().past(30, TimeUnit.DAYS));
        remocao.setData_remocao(faker.date().past(30, TimeUnit.DAYS));
        remocao.setCusto(BigDecimal.valueOf(faker.random().nextDouble()));
        remocao.setInd_dificuldade_mobilidade(false);
        remocao.setCoordenada_origem(new PGpoint(
                Double.valueOf(faker.address().latitude().replaceAll(",", ".")),
                Double.valueOf(faker.address().longitude().replaceAll(",", "."))
        ));
        remocao.setCoordenada_destino(new PGpoint(
                Double.valueOf(faker.address().latitude().replaceAll(",", ".")),
                Double.valueOf(faker.address().longitude().replaceAll(",", "."))
        ));
        remocao.setNome_endereco_origem(faker.address().fullAddress());
        remocao.setBairro_origem(faker.address().cityName());
        remocao.setCidade_origem(faker.address().cityName());
        remocao.setUf_origem(faker.address().stateAbbr());
        remocao.setCep_origem(faker.address().zipCode());
        remocao.setNome_endereco_destino(faker.address().fullAddress());
        remocao.setBairro_destino(faker.address().cityName());
        remocao.setCidade_destino(faker.address().cityName());
        remocao.setUf_destino(faker.address().stateAbbr());
        remocao.setCep_destino(faker.address().zipCode());
        remocao.setObservacao_destino(faker.hobbit().quote());
        remocao.setResponsavel_destino(faker.name().fullName());
        remocao.persist();
        Log.info("Remocao persistido " + remocao.getSeq_remocao());
    }
}

