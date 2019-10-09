package com.cefalo.moviemania.services;

import com.cefalo.moviemania.models.TmdbMovie;
import com.cefalo.moviemania.utils.CSVParserAsyn;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 * Created by Tauhid on 3/27/2018.
 */
@Service
public class TmdbDataService {
    private static final String TMDB_API_ENDPOINT = "https://api.themoviedb.org/3";
    private static final Logger logger = LoggerFactory.getLogger(CSVParserAsyn.class);
    private final RestTemplate restTemplate;

    @Value("${Tmdb.apiKey}")
    private String apiKey;

    @Autowired
    public TmdbDataService(RestTemplate restTemplate) {
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
