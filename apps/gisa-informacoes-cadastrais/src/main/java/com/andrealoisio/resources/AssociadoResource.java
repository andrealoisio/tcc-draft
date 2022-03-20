package com.andrealoisio.resources;

import com.andrealoisio.entities.Associado;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("/associados")
public class AssociadoResource {
    @GET
    public Response listAssociados() {
        var associadoList = Associado.listAll();
        return Response.ok(associadoList).build();
    }
}
