package com.andrealoisio.resources;

import com.andrealoisio.entities.Remocao;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("/remocoes")
public class RemocaoResource {

    @GET
    @Path("/{seqAtendimento}")
    public Response getRemocoesAtendimento(@PathParam Integer seqAtendimento){
        var list = Remocao.list("seq_atendimento", seqAtendimento);
        return Response.ok(list).build();
    }

}
