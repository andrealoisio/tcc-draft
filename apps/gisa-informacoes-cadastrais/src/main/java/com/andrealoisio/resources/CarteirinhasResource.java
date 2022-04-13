package com.andrealoisio.resources;

import com.andrealoisio.entities.CarteirinhasEmitidas;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("/carteirinhas")
public class CarteirinhasResource {

    @GET
    @Path("/{seqAssociado}")
    public Response getCarteirinhasAssociado(@PathParam Integer seqAssociado){
        var list = CarteirinhasEmitidas.list("matricula", seqAssociado);
        return Response.ok(list).build();
    }

}
