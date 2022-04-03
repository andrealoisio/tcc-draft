package com.andrealoisio.consumers;

import com.andrealoisio.entities.Associado;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.quarkus.logging.Log;
import org.eclipse.microprofile.reactive.messaging.Incoming;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

@ApplicationScoped
public class AssociadoConsumer {

    @Incoming("associados")
    @Transactional
    public void process(String payload) throws InterruptedException, JsonProcessingException {
        Log.info("Something get here");
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(payload);
        Associado associado = mapper.treeToValue(jsonNode.get("after"), Associado.class);
        associado.persist();

        Log.info(payload);
        Thread.sleep(2000);
    }

}
