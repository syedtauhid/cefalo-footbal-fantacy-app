package com.cefalo.moviemania.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Tauhid on 3/25/2018.
 */
@Entity
public class Genre {
    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String name;

    @Transient
    private List<Movie> movies = new ArrayList<>();

    private Genre() {
    }

    public Genre(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Movie> getMovies() {
        return movies;
    }

    public void setMovies(List<Movie> movies) {
        this.movies = movies;
    }
}
