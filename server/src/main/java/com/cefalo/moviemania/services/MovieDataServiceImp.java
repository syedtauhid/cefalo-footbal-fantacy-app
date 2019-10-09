package com.cefalo.moviemania.services;

import com.cefalo.moviemania.models.Genre;
import com.cefalo.moviemania.models.Movie;
import com.cefalo.moviemania.repository.GenreRepository;
import com.cefalo.moviemania.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MovieDataServiceImp implements MovieDataService {

    private final MovieRepository movieRepository;

    private final GenreRepository genreRepository;

    @Autowired
    public MovieDataServiceImp(MovieRepository movieRepository, GenreRepository genreRepository) {
        this.movieRepository = movieRepository;
        this.genreRepository = genreRepository;
    }

    @Override
    public List<Movie> getTopMoviesByGenre(String genre) {
        return movieRepository.findFirst30ByGenresContainingOrderByImdbRatingDesc(genre);
    }

    @Override
    public List<Movie> getThreeMoviesByGenre(String genre) {
        return movieRepository.findFirst3ByGenresContainingOrderByRandom(genre);
    }

    @Override
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @Override
    public List<Genre> getAllGenres() {
        return genreRepository.findAll();
    }

    @Override
    public Genre findGenreById(Long id) {
        Optional<Genre> genreOptional =  genreRepository.findById(id);
        return genreOptional.isPresent() ? genreOptional.get() : null;
    }

    @Override
    public Genre findGenreByName(String name) {
        return genreRepository.findByNameIgnoreCase(name);
    }

    @Override
    public Movie findMovieById(Long id) {
        Optional<Movie> movieOptional =  movieRepository.findById(id);
        return movieOptional.isPresent() ? movieOptional.get() : null;
    }

    @Override
    public void addAllMovies(List<Movie> movies) {
        movieRepository.saveAll(movies);

    }

    @Override
    public void addNewMovie(Movie movie) {
        movieRepository.save(movie);
    }

    @Override
    public void addAllGenres(List<Genre> genres) {
        genreRepository.saveAll(genres);
    }

    @Override
    public void addNewGenre(Genre genre) {
        genreRepository.save(genre);
    }
}
