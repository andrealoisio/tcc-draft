package com.andrealoisio.resources;

import com.andrealoisio.entities.Associado;
import com.andrealoisio.entities.Atendimento;
import com.andrealoisio.entities.Autorizacao;
import com.andrealoisio.views.AtendimentoView;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
import java.util.HashMap;

@Path("/atendimentos")
public class AtendimentoResource {

    @GET
    public Response getAtendimentos(){
        var list = AtendimentoView.listAll();
        return Response.ok(list).build();
    }

    @GET
    @Path("/{seqAtendimento}")
    public Response getAtendimento(@PathParam Integer seqAtendimento){
        return AtendimentoView.findByIdOptional(seqAtendimento)
                .map(atendimento -> Response.ok(atendimento).build())
                .orElse(Response.status(Response.Status.NOT_FOUND).build());
    }

    @GET
    @Path("/resumo")
    public Response getResumoAtendimentos(@PathParam Integer seqAtendimento){
        var retorno = new HashMap<String, Long>();
        retorno.put("totalAtendimentos", AtendimentoView.count());
        retorno.put("totalAutorizacoesPendentes", Autorizacao.count("situacao", "Pendente"));
        return Response.ok(retorno).build();
    }

}
