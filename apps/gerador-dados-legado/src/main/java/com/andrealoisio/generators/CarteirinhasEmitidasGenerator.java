package com.andrealoisio.generators;

import com.andrealoisio.entities.Associado;
import com.andrealoisio.entities.CarteirinhasEmitidas;
import com.github.javafaker.Faker;
import io.quarkus.hibernate.orm.panache.PanacheQuery;
import io.quarkus.logging.Log;
import io.quarkus.panache.common.Sort;
import io.quarkus.scheduler.Scheduled;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import java.sql.Date;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

@ApplicationScoped
public class CarteirinhasEmitidasGenerator {
    @Scheduled(every = "8s")
    @Transactional
    void inserirCarteirinhaEmitida() {
        PanacheQuery<Associado> ultimosAssociados = Associado.findAll(Sort.descending("matricula"));
        ultimosAssociados.range(0,1);
        var associado = ultimosAssociados.list().stream().findFirst();
        if (associado.isPresent()) {
            Log.info("Genarating carteirinha emitida para " + associado.get().getNome());
            Faker faker = new Faker(new Locale("pt-BR"));
            var novaCarteirinha = new CarteirinhasEmitidas();
            novaCarteirinha.setMatricula(associado.get().getMatricula());
            novaCarteirinha.setDataRegistro(new java.sql.Date((new java.util.Date().getTime())));
            novaCarteirinha.setDataVencimento(faker.date().future(365, TimeUnit.DAYS));
            novaCarteirinha.persist();
        }

    }
}
