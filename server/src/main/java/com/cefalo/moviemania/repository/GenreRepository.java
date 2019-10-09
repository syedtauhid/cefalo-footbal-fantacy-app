package com.cefalo.moviemania.repository;

import com.cefalo.moviemania.models.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Tauhid on 3/25/2018.
 */
public interface GenreRepository extends JpaRepository<Genre, Long> {
    Genre findByNameIgnoreCase(String name);
}
