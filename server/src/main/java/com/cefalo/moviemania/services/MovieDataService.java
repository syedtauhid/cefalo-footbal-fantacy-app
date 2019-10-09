package com.cefalo.moviemania.services;

import com.cefalo.moviemania.models.Genre;
import com.cefalo.moviemania.models.Movie;

import java.util.List;
import java.util.Map;

public interface MovieDataService {
    List<Movie> getTopMoviesByGenre(String genre);
    List<Movie> getThreeMoviesByGenre(String genre);
    List<Movie> getAllMovies();
    List<Genre> getAllGenres();
    Genre findGenreById(Long id);
    Genre findGenreByName(String name);
    Movie findMovieById(Long id);
    void addAllMovies(List<Movie> movie);
    void addNewMovie(Movie movie);
    void addAllGenres(List<Genre> genres);
    void addNewGenre(Genre genre);
}