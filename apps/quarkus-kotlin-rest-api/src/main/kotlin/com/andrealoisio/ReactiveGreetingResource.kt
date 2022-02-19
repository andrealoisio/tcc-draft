package com.andrealoisio

import org.jboss.resteasy.reactive.*
import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType

@Path("/hello")
class ReactiveGreetingResource {

    @GET
    fun hello() = "Hello RESTEasy Reactive"

    @GET
    @Path("/cheeses/{type}")
    fun getInfo(@RestPath type: String?,
                @RestMatrix variant: String?,
                @RestQuery age: String?,
                @RestCookie level: String?,
                @RestHeader("X-Cheese-Secret-Handshake") secretHandshake: String?,
                @RestForm smell: String?): String {
        return "$type/$variant/$age/$level/$secretHandshake/$smell"
    }
}