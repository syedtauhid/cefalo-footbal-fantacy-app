package com.cefalo.fantacy.config;

import com.cefalo.fantacy.controllers.FantasyController;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Configuration
@Controller
@CrossOrigin(maxAge = 3600)
public class JerseyConfig extends ResourceConfig {

    public JerseyConfig() {
        register(CORSResponseFilter.class);
        register(FantasyController.class);
    }
}