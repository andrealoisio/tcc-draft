package com.andrealoisio.consumers;

import com.andrealoisio.entities.Associado;
import com.andrealoisio.entities.CarteirinhasEmitidas;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.quarkus.logging.Log;
import org.eclipse.microprofile.reactive.messaging.Incoming;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

@ApplicationScoped
public class CarteirinhasEmitidasConsumer {

    @Incoming("carteirinha")
    @Transactional
    public void process(String payload) throws InterruptedException, JsonProcessingException {
        Log.info("CarteirinhasEmitidasConsumer: Waiting");
        Thread.sleep(3000);
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(payload);
        CarteirinhasEmitidas carteirinha = mapper.treeToValue(jsonNode.get("after"), CarteirinhasEmitidas.class);
        var existente = CarteirinhasEmitidas.findByIdOptional(carteirinha.getNumero());
        if (!existente.isPresent()) {
            var associado = Associado.findByIdOptional(carteirinha.getMatricula());
            if (!associado.isPresent()) {
                Log.info("CarteirinhasEmitidasConsumer: Associado  " + carteirinha.getMatricula() + " not found");
                return;
            }
            carteirinha.persist();
            Log.info("Persisting carteirinha: " + carteirinha.getNumero());
        }
    }

}
