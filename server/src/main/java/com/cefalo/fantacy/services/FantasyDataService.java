package com.cefalo.fantacy.services;

import com.cefalo.fantacy.models.TmdbMovie;
import com.cefalo.fantacy.utils.CSVParserAsyn;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class FantasyDataService {
    private static final String TMDB_API_ENDPOINT = "https://api.themoviedb.org/3";
    private static final Logger logger = LoggerFactory.getLogger(CSVParserAsyn.class);
    private final RestTemplate restTemplate;

    @Value("${Pulselive.apiUrl}")
    private String apiKey;

    @Autowired
    public FantasyDataService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }


    public TmdbMovie getMovieDetails(String tmdbId) {
        String apiUrl = TMDB_API_ENDPOINT + "/movie/" + tmdbId + "?api_key=" + this.apiKey;
        return restTemplate.getForObject(apiUrl, TmdbMovie.class);
    }

    public Object getCastAndCrewDetails(String tmdbId) {
        String apiUrl = TMDB_API_ENDPOINT + "/movie/" + tmdbId + "/credits?api_key=" + this.apiKey;
        return restTemplate.getForObject(apiUrl, Object.class);
    }

    public Object getMovieVideos(String movieId) {
        String apiUrl = TMDB_API_ENDPOINT + "/movie/" + movieId + "/videos?api_key=" + this.apiKey;
        return restTemplate.getForObject(apiUrl, Object.class);
    }
}
