package com.andrealoisio.consumers;

import com.andrealoisio.entities.Atendimento;
import com.andrealoisio.entities.Remocao;
import com.andrealoisio.entities.Formacao;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.quarkus.logging.Log;
import org.eclipse.microprofile.reactive.messaging.Incoming;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

@ApplicationScoped
public class RemocaoConsumer {

    @Incoming("remocao")
    @Transactional
    public void process(String payload) throws InterruptedException, JsonProcessingException {
        Log.info("RemocaoConsumer: Waiting");
        Thread.sleep(3000);
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(payload);
        Remocao remocao = mapper.treeToValue(jsonNode.get("after"), Remocao.class);
        var existente = Remocao.findByIdOptional(remocao.getSeqRemocao());
        if (!existente.isPresent()) {
            var atendimento = Atendimento.findByIdOptional(remocao.getSeqAtendimento());
            if (!atendimento.isPresent()) {
                Log.info("RemocaoConsumer: Atendimento  " + remocao.getSeqAtendimento() + " not found");
                return;
            }
            remocao.persist();
            Log.info("Persisting remocao: " + remocao.getSeqRemocao());
        }
    }

}
