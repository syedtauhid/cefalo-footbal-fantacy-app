package com.cefalo.fantacy.utils;

import com.cefalo.fantacy.models.Movie;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Helper {

    public static String getCurrentDateTime(){
        Date date = new Date();
        String strDateFormat = "yyyy-MM-dd 'at' hh:mm:ss a':'";
        DateFormat dateFormat = new SimpleDateFormat(strDateFormat);
        return dateFormat.format(date);
    }

    public static Movie createMovieObjectFromData(String[] movieData, String[] linkData) {
        Movie movie =  new Movie();
        movie.setMovieId(Integer.parseInt(movieData[0]));
        movie.setTitle(movieData[1]);
        movie.setGenres(movieData[2]);
        movie.setImdbId(linkData[1]);
        movie.setTmdbId(linkData[2]);
        return movie;
    }

}
