package com.andrealoisio.consumers;

import com.andrealoisio.entities.Autorizacao;
import com.andrealoisio.entities.Formacao;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.quarkus.logging.Log;
import org.eclipse.microprofile.reactive.messaging.Incoming;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

@ApplicationScoped
public class AutorizacaoConsumer {

    @Incoming("autorizacao")
    @Transactional
    public void process(String payload) throws InterruptedException, JsonProcessingException {
        Thread.sleep(3000);
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(payload);
        Autorizacao autorizacao = mapper.treeToValue(jsonNode.get("after"), Autorizacao.class);
        var existente = Formacao.findByIdOptional(autorizacao.getCodigo());
        if (!existente.isPresent()) {
            autorizacao.persist();
            Log.info("Persisting formacao: " + autorizacao.getCodigo());
        }
    }

}
