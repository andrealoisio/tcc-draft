package com.andrealoisio.consumers;

import com.andrealoisio.entities.Formacao;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.quarkus.logging.Log;
import org.eclipse.microprofile.reactive.messaging.Incoming;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

@ApplicationScoped
public class FormacaoConsumer {

    @Incoming("formacao")
    @Transactional
    public void process(String payload) throws InterruptedException, JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(payload);
        Formacao formacao = mapper.treeToValue(jsonNode.get("after"), Formacao.class);
        var existente = Formacao.findByIdOptional(formacao.getSeqFormacao());
        if (!existente.isPresent()) {
            formacao.persist();
            Log.info("Persisting formacao: " + formacao.getNomeCurso());
        }
    }

}
