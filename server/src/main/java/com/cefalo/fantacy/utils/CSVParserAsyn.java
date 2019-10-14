package com.cefalo.fantacy.utils;

/**
 * Created by Tauhid on 3/26/2018.
 */

import com.cefalo.fantacy.models.Genre;
import com.cefalo.fantacy.models.Movie;
import com.cefalo.fantacy.models.TmdbMovie;
import com.cefalo.fantacy.services.MovieDataService;
import com.cefalo.fantacy.services.FantasyDataService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.task.TaskExecutor;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

@Component
@EnableAsync
public class CSVParserAsyn implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(CSVParserAsyn.class);
    private final MovieDataService movieDataService;
    private final FantasyDataService fantasyDataService;
    private final TaskExecutor taskExecutor;
    private List<String> genreList = new ArrayList<>();
    private List<Movie> movieList = new ArrayList<>();

    @Autowired
    public CSVParserAsyn(MovieDataService movieDataService, FantasyDataService fantasyDataService, TaskExecutor taskExecutor) {
        this.movieDataService = movieDataService;
        this.fantasyDataService = fantasyDataService;
        this.taskExecutor = taskExecutor;
    }


    @Override
    public void run(String... args) throws Exception {
        // Start parsing CSV data.
        List<String[]> moviesCsvData = OpenCSVReader.readCSVFilesWithHeader("movies.csv");
        List<String[]> linksCsvData = OpenCSVReader.readCSVFilesWithHeader("links.csv");
        assert moviesCsvData.size() != linksCsvData.size();
        for (int i = 0; i < moviesCsvData.size(); i++) {
            String[] movieData = moviesCsvData.get(i);
            String[] linkData = linksCsvData.get(i);
            Movie movie = Helper.createMovieObjectFromData(movieData, linkData);
            checkAndStoreGenreData(movie);
            movieDataService.addNewMovie(movie);
        }
        saveAllGenresToDB();
        getAndStoreMovieDetailsFromTmdb();
    }

    private void getAndStoreMovieDetailsFromTmdb() {
        List<Movie> movies = movieDataService.getAllMovies();
        taskExecutor.execute(new Runnable() {
            @Override
            public void run() {
                for (Movie movie : movies)
                    getMovieDetailsAndStore(movie);
            }
        });
    }

    private void saveAllGenresToDB() {
        for (String genreName : this.genreList) {
            Genre genre = new Genre(genreName);
            movieDataService.addNewGenre(genre);
        }
    }

    private void checkAndStoreGenreData(Movie movie) {
        String[] genres = movie.getGenres().split(Pattern.quote("|"));
        for (String genre : genres) {
            if (!genreList.contains(genre))
                this.genreList.add(genre);
        }
    }

    @Async
    private void getMovieDetailsAndStore(Movie movie) {
        if (movie.getTmdbId() == null || movie.getTmdbId().isEmpty())
            return;
        try {
            TmdbMovie tmdbMovie = fantasyDataService.getMovieDetails(movie.getTmdbId());
            movie.setBackdropPath(tmdbMovie.getBackdrop_path());
            movie.setPosterImg(tmdbMovie.getPoster_path());
            movie.setOverview(tmdbMovie.getOverview());
            movie.setImdbRating(tmdbMovie.getVote_average());
            movie.setBudget(tmdbMovie.getBudget());
            movie.setRevenue(tmdbMovie.getRevenue());
            movieDataService.addNewMovie(movie);
            logger.info("Movie Data Updated: " + movie.getMovieId());

        } catch (Exception ex) {
            ex.printStackTrace();
            logger.error("Error while parsing data: " + ex.getMessage());
        }
    }
}