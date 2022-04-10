package com.andrealoisio.generators;

import com.andrealoisio.entities.Formacao;
import com.andrealoisio.entities.Prestador;
import com.github.javafaker.Faker;
import io.quarkus.hibernate.orm.panache.PanacheQuery;
import io.quarkus.logging.Log;
import io.quarkus.scheduler.Scheduled;
import org.postgresql.geometric.PGpoint;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

@ApplicationScoped
public class PrestadorGenerator {
    @Scheduled(every = "8s")
    @Transactional
    void inserirPrestador() {
        PanacheQuery<Formacao> ultimaFormacao = Formacao.findAll();
        ultimaFormacao.range(0,1);
        var formacao = ultimaFormacao.list().stream().findFirst();
        if (!formacao.isPresent()) {
            return;
        }
        Log.info("Genarating prestador...");
        Faker faker = new Faker(new Locale("pt-BR"));
        var prestador = new Prestador();
        prestador.setNome(faker.name().fullName());
        prestador.setEmail(faker.internet().emailAddress());
        prestador.setCpf(String.valueOf(faker.random().nextLong(99999999999l)));
        prestador.setCnpj(String.valueOf(faker.random().nextLong(99999999999999l)));
        prestador.setEspecializacao(faker.company().profession());
        prestador.setDataRegistro(faker.date().past(365, TimeUnit.DAYS));
        prestador.setTelefone(faker.phoneNumber().phoneNumber());
        prestador.setCelular(faker.phoneNumber().cellPhone());
        prestador.setSeqFormacao(formacao.get().getSeqFormacao());
        prestador.setNomeEndereco(faker.address().fullAddress());
        prestador.setBairro(faker.address().cityName());
        prestador.setCidade(faker.address().cityName());
        prestador.setUf(faker.address().stateAbbr());
        prestador.setCep(faker.address().zipCode());
        prestador.setCoordenadas(new PGpoint(
                Double.valueOf(faker.address().latitude().replaceAll(",", ".")),
                Double.valueOf(faker.address().longitude().replaceAll(",", "."))
        ));
        prestador.setBanco(faker.random().nextInt(999));
        prestador.setAgencia(faker.random().nextInt(9999));
        prestador.setConta(faker.random().nextInt(999999));
        Log.info("Prestador persistido " + prestador.getNome());
        prestador.persist();
    }
}

