package com.andrealoisio.generators;

import com.andrealoisio.entities.Formacao;
import com.github.javafaker.Faker;
import io.quarkus.logging.Log;
import io.quarkus.scheduler.Scheduled;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

@ApplicationScoped
public class FormacaoGenerator {
    @Scheduled(every = "8s")
    @Transactional
    void inserirFormacao() {
        Log.info("Generating formacao...");

        Faker faker = new Faker(new Locale("pt-BR"));
        var formacao = new Formacao();
        formacao.setDataTermino(faker.date().future(365, TimeUnit.DAYS));
        formacao.setDataInicio(faker.date().past(120, TimeUnit.DAYS));
        formacao.setAreaConhecimento(faker.company().industry());
        formacao.setNomeCurso(faker.company().profession());
        formacao.setNivel("Superior");
        formacao.setInstituicao(faker.university().name());
        formacao.setTituloTese(faker.harryPotter().quote());
        Log.info("Persisting Formação " + formacao.getNomeCurso());
        formacao.persist();
    }
}

