package com.andrealoisio.resources;

import com.andrealoisio.entities.Associado;
import com.andrealoisio.entities.Autorizacao;
import com.andrealoisio.entities.CarteirinhasEmitidas;
import com.andrealoisio.views.AtendimentoView;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;
import java.util.HashMap;

@Path("/associados")
public class AssociadoResource {
    @GET
    public Response listAssociados() {
        var associadoList = Associado.listAll();
        return Response.ok(associadoList).build();
    }

    @GET
    @Path("/{matricula}")
    public Response getAssociado(@PathParam Integer matricula) {
        return Associado.find("matricula", matricula)
                .singleResultOptional()
                .map(associado -> Response.ok(associado).build())
                .orElse(Response.status(Response.Status.NOT_FOUND).build());
    }

    @GET
    @Path("/search")
    public Response getAssociado(@QueryParam("q") String query) {
        return Associado.list("nome like ?1", "%" + query + "%").stream().findAny()
                .map(associado -> Response.ok(associado).build())
                .orElse(Response.status(Response.Status.NOT_FOUND).build());
    }

    @GET
    @Path("/resumo")
    public Response getResumoAssociados(@PathParam Integer seqAtendimento){
        var retorno = new HashMap<String, Long>();
        retorno.put("totalCarterinhasEmitidas", CarteirinhasEmitidas.count());
        retorno.put("totalAssociadosAtivos", Associado.count("is_ativo", true));
        return Response.ok(retorno).build();
    }

}
