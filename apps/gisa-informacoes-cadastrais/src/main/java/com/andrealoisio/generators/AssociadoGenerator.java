package com.andrealoisio.generators;

import com.andrealoisio.entities.Associado;
import com.github.javafaker.Faker;
import io.quarkus.logging.Log;
import io.quarkus.scheduler.Scheduled;
import org.postgresql.geometric.PGpoint;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

@ApplicationScoped
public class AssociadoGenerator {

    @Scheduled(every = "5s")
    @Transactional
    void insertAssociado() {
        Log.info("Generating associado...");
        Faker faker = new Faker(new Locale("pt-BR"));
        var associado = new Associado();
        associado.setNome(faker.name().fullName());
        associado.setCpf(String.valueOf(faker.random().nextLong(99999999999l)));
        associado.setEmail(faker.internet().emailAddress());
        associado.setDataNascimento(faker.date().birthday());
        associado.setDataRegistro(faker.date().past(30, TimeUnit.DAYS));
        // todo: plano
        associado.setCelular(faker.phoneNumber().phoneNumber());
        associado.setTelefone(faker.phoneNumber().phoneNumber());
        associado.setNomeMae(faker.name().fullName());
        associado.setNomeEndereco(faker.address().fullAddress());
        associado.setBairro(faker.address().cityName());
        associado.setCidade(faker.address().cityName());
        associado.setUf(faker.address().stateAbbr());
        associado.setCep(faker.address().zipCode());
        associado.setCoordenadas(new PGpoint(
                Double.valueOf(faker.address().latitude().replaceAll(",", ".")),
                Double.valueOf(faker.address().longitude().replaceAll(",", "."))
        ));
        associado.setAtivo(true);
        Log.info("Persisting " + associado.getNome());
        associado.persist();
    }
}
