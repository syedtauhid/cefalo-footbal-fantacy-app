package com.cefalo.moviemania.utils;

import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class OpenCSVReader {
    private static final String CSV_FILE_BASE_PATH = "./assets/";
    private static final Logger logger = LoggerFactory.getLogger(OpenCSVReader.class);

    public static void main(String[] args) throws IOException {
    }

    public static List<String[]> readCSVFilesWithHeader(String fileName){
        String filePath = CSV_FILE_BASE_PATH + fileName;
        List<String[]> records = new ArrayList<>();
        try {
            Reader reader = Files.newBufferedReader(Paths.get(filePath));
            CSVReader csvReader = new CSVReaderBuilder(reader).withSkipLines(1).build();
            records = csvReader.readAll();
        } catch (Exception ex){
            ex.printStackTrace();
            logger.error( "Error occurred while parsing CSV files: " + ex.getMessage());
        }
        return records;
    }
}