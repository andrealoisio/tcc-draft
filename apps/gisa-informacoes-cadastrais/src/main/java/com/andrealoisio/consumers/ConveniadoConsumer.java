package com.andrealoisio.consumers;

import com.andrealoisio.entities.Associado;
import com.andrealoisio.entities.Conveniado;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.quarkus.logging.Log;
import org.eclipse.microprofile.reactive.messaging.Incoming;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

@ApplicationScoped
public class ConveniadoConsumer {

    @Incoming("conveniados")
    @Transactional
    public void process(String payload) throws InterruptedException, JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(payload);
        Conveniado conveniado = mapper.treeToValue(jsonNode.get("after"), Conveniado.class);
        var existente = Conveniado.findByIdOptional(conveniado.getSeqConveniado());
        if (!existente.isPresent()) {
            conveniado.persist();
            Log.info("Persisting conveniado: " + conveniado.getNome());
        }
        // Log.info(payload);
        Thread.sleep(2000);
    }

}
