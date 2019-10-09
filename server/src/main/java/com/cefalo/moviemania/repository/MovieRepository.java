package com.cefalo.moviemania.repository;

import com.cefalo.moviemania.models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by Tauhid on 3/25/2018.
 */
public interface MovieRepository extends JpaRepository<Movie, Long> {
    List<Movie> findFirst30ByGenresContainingOrderByImdbRatingDesc(String genre);
    @Query(value = "SELECT * FROM Movie WHERE genres like %?1% AND poster_img IS NOT NULL ORDER BY random() LIMIT 3", nativeQuery = true)
    List<Movie> findFirst3ByGenresContainingOrderByRandom(String genre);
}
