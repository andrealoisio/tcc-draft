package com.andrealoisio.generators;

import com.andrealoisio.entities.Atendimento;
import com.andrealoisio.entities.Remocao;
import com.github.javafaker.Faker;
import io.quarkus.logging.Log;
import io.quarkus.scheduler.Scheduled;
import org.postgresql.geometric.PGpoint;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.Locale;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@ApplicationScoped
public class RemocaoGenerator {
    @Scheduled(every = "8s")
    @Transactional
    void inserirRemocao() {
        Log.info("Genarating remocao...");
        Faker faker = new Faker(new Locale("pt-BR"));

        Optional<Atendimento> atendimento = Atendimento
                .find("order by seq_atendimento desc")
                .firstResultOptional();

        if (!atendimento.isPresent()) {
            return;
        }

        var remocao = new Remocao();
        remocao.setSeqAtendimento(atendimento.get().getSeqAtendimento());
        remocao.setDataRegistro(faker.date().past(30, TimeUnit.DAYS));
        remocao.setDataRemocao(faker.date().past(30, TimeUnit.DAYS));
        remocao.setCusto(BigDecimal.valueOf(faker.random().nextDouble()));
        remocao.setIndDificuldadeMobilidade(false);
        remocao.setCoordenadaOrigem(new PGpoint(
                Double.valueOf(faker.address().latitude().replaceAll(",", ".")),
                Double.valueOf(faker.address().longitude().replaceAll(",", "."))
        ));
        remocao.setCoordenadaDestino(new PGpoint(
                Double.valueOf(faker.address().latitude().replaceAll(",", ".")),
                Double.valueOf(faker.address().longitude().replaceAll(",", "."))
        ));
        remocao.setNomeEnderecoOrigem(faker.address().fullAddress());
        remocao.setBairroOrigem(faker.address().cityName());
        remocao.setCidadeOrigem(faker.address().cityName());
        remocao.setUfOrigem(faker.address().stateAbbr());
        remocao.setCepOrigem(faker.address().zipCode());
        remocao.setNomeEnderecoDestino(faker.address().fullAddress());
        remocao.setBairroDestino(faker.address().cityName());
        remocao.setCidadeDestino(faker.address().cityName());
        remocao.setUfDestino(faker.address().stateAbbr());
        remocao.setCepDestino(faker.address().zipCode());
        remocao.setObservacaoDestino(faker.hobbit().quote());
        remocao.setResponsavelDestino(faker.name().fullName());
        remocao.persist();
        Log.info("Remocao persistido " + remocao.getSeqRemocao());
    }
}

