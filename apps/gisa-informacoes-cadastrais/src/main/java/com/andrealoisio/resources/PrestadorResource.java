package com.andrealoisio.resources;

import com.andrealoisio.entities.Prestador;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("/prestadores")
public class PrestadorResource {
    @GET
    public Response listPrestadores() {
        var prestadorList = Prestador.listAll();
        return Response.ok(prestadorList).build();
    }

    @GET
    @Path("/{codigo}")
    public Response getPrestador(@PathParam Integer codigo) {
        return Prestador.findByIdOptional(codigo)
                .map(prestador -> Response.ok(prestador).build())
                .orElse(Response.status(Response.Status.NOT_FOUND).build());
    }
}
