package com.andrealoisio.resources;

import com.andrealoisio.entities.Conveniado;
import com.andrealoisio.entities.Remocao;
import com.andrealoisio.views.AtendimentoView;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;
import java.util.HashMap;

@Path("/conveniados")
public class ConveniadoResource {
    @GET
    public Response listConveniados() {
        var conveniadoList = Conveniado.listAll();
        return Response.ok(conveniadoList).build();
    }

    @GET
    @Path("/{seq-conveniado}")
    public Response getConveniado(@PathParam("seq-conveniado") Integer seqConveniado) {
        return Conveniado.find("seq_conveniado", seqConveniado)
                .singleResultOptional()
                .map(conveniado -> Response.ok(conveniado).build())
                .orElse(Response.status(Response.Status.NOT_FOUND).build());
    }

    @GET
    @Path("/search")
    public Response searchConveniado(@QueryParam("q") String query) {
        return Conveniado.list("nome like ?1", "%" + query + "%").stream().findAny()
                .map(conveniado -> Response.ok(conveniado).build())
                .orElse(Response.status(Response.Status.NOT_FOUND).build());
    }

    @GET
    @Path("/resumo")
    public Response getResumoConveniados(@PathParam Integer seqAtendimento){
        var retorno = new HashMap<String, Long>();
        retorno.put("totalAtendimentos", AtendimentoView.count());
        retorno.put("totalConveniados", Conveniado.count());
        retorno.put("totalRemocoes", Remocao.count());
        return Response.ok(retorno).build();
    }

}
