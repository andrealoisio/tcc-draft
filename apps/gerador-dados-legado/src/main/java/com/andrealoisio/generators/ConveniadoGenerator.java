package com.andrealoisio.generators;

import com.andrealoisio.entities.Conveniado;
import com.github.javafaker.Faker;
import io.quarkus.logging.Log;
import io.quarkus.scheduler.Scheduled;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

@ApplicationScoped
public class ConveniadoGenerator {

    @Scheduled(every = "6s")
    @Transactional
    void generate() {
        Log.info("Generating conveniado...");
        Faker faker = new Faker(new Locale("pt-BR"));
        var conveniado = new Conveniado();
        var nome = faker.name().fullName();
        conveniado.setNome(nome);
        conveniado.setNomeFantasia(faker.company().name());
        conveniado.setEmail(faker.internet().emailAddress());
        conveniado.setCnpj(String.valueOf(faker.random().nextLong(99999999999999l)));
        conveniado.setAtividade(faker.job().field());
        conveniado.setDataRegistro(faker.date().past(30, TimeUnit.DAYS));
        conveniado.setTelefone(faker.phoneNumber().phoneNumber());
        conveniado.setCelular(faker.phoneNumber().cellPhone());
        conveniado.setNomeResponsavel(nome);
        conveniado.setNomeEndereco(nome);
        conveniado.setBairro(faker.address().cityName());
        conveniado.setCidade(faker.address().cityName());
        conveniado.setUf(faker.address().stateAbbr());
        conveniado.setCep(faker.address().zipCode());
        conveniado.setBanco(faker.random().nextInt(9999));
        conveniado.setAgencia(faker.random().nextInt(999));
        conveniado.setConta(faker.random().nextInt(9999999));
        Log.info("Persisting conveniado " + conveniado.getNome());
        conveniado.persist();
    }
}
