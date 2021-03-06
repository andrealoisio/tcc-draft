package com.andrealoisio.resources;

import com.andrealoisio.entities.Autorizacao;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("/autorizacoes")
public class AutorizacaoResource {

    @GET
    @Path("/{seqAtendimento}")
    public Response getAutorizacoesAtendimento(@PathParam Integer seqAtendimento){
        var list = Autorizacao.list("seq_atendimento", seqAtendimento);
        return Response.ok(list).build();
    }

}
