package com.andrealoisio

import javax.ws.rs.GET
import javax.ws.rs.Path


@Path("/ping")
class PingController {

    @GET
    fun pong() = "pong"

}