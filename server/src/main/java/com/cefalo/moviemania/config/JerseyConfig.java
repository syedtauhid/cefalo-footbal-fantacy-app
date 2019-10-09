package com.cefalo.moviemania.config;

import com.cefalo.moviemania.controllers.MovieDataController;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.ws.rs.ApplicationPath;

@Configuration
@Controller
@CrossOrigin(maxAge = 3600)
public class JerseyConfig extends ResourceConfig {

    public JerseyConfig() {
        register(CORSResponseFilter.class);
        register(MovieDataController.class);
    }
}