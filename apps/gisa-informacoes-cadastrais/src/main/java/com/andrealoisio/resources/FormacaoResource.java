package com.andrealoisio.resources;

import com.andrealoisio.entities.Formacao;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("/formacoes")
public class FormacaoResource {

    @GET
    @Path("/{seqFormacao}")
    public Response getFormacao(@PathParam Integer seqFormacao) {
        return Formacao.findByIdOptional(seqFormacao)
                .map(formacao -> Response.ok(formacao).build())
                .orElse(Response.status(Response.Status.NOT_FOUND).build());
    }
}
