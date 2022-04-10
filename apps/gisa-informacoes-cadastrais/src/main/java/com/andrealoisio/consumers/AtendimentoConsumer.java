package com.andrealoisio.consumers;

import com.andrealoisio.entities.Associado;
import com.andrealoisio.entities.Atendimento;
import com.andrealoisio.entities.Prestador;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.quarkus.logging.Log;
import org.eclipse.microprofile.reactive.messaging.Incoming;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

@ApplicationScoped
public class AtendimentoConsumer {

    // @Incoming("atendimento")
    @Transactional
    public void process(String payload) throws InterruptedException, JsonProcessingException {
        Thread.sleep(2000);

        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(payload);
        Atendimento atendimento = mapper.treeToValue(jsonNode.get("after"), Atendimento.class);
        var existente = atendimento.findByIdOptional(atendimento.getSeqAtendimento());
        if (!existente.isPresent()) {
            var associado = Associado.findByIdOptional(atendimento.getSeqAssociado());
            if (!associado.isPresent()) {
                Log.info("AtendimentoConsumer: Associado  " + atendimento.getSeqAssociado() + " not found");
                return;
            }

            var prestador = Prestador.findByIdOptional(atendimento.getCodigoPrestador());
            if (!prestador.isPresent()) {
                Log.info("AtendimentoConsumer: Prestador "  + atendimento.getCodigoPrestador() +" not found");
                return;
            }

            atendimento.persist();
            Log.info("Persisting atendimento: " + atendimento.getSeqAtendimento());
        }
        // Log.info(payload);
        Thread.sleep(2000);
    }

}
