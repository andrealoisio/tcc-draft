package com.andrealoisio.resources;

import com.andrealoisio.views.AtendimentoView;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("/atendimentos")
public class AtendimentoResource {

    @GET
    public Response getAtendimentos(){
        var list = AtendimentoView.listAll();
        return Response.ok(list).build();
    }

}
