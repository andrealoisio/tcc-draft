package com.andrealoisio.consumers;

import com.andrealoisio.entities.Formacao;
import com.andrealoisio.entities.Prestador;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.quarkus.logging.Log;
import org.eclipse.microprofile.reactive.messaging.Incoming;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

@ApplicationScoped
public class PrestadorConsumer {

    //@Incoming("prestador")
    @Transactional
    public void process(String payload) throws InterruptedException, JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(payload);
        Prestador prestador = mapper.treeToValue(jsonNode.get("after"), Prestador.class);
        var existente = Prestador.findByIdOptional(prestador.getCodigo());
        if (!existente.isPresent()) {
            var formacao = Formacao.findByIdOptional(prestador.getSeqFormacao());
            if (!formacao.isPresent()) {
                Log.info("PrestadorConsumer: Formacao " + prestador.getSeqFormacao() + " not found");
                return;
            }
            prestador.persist();
            Log.info("Persisting prestador: " + prestador.getNome());
        }
        // Log.info(payload);
        Thread.sleep(2000);
    }

}
