package com.andrealoisio.resources;

import com.andrealoisio.entities.Associado;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

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
}
