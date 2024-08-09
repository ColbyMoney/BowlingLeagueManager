package com.bowling.bowlingleaguemanager.controller;

import com.bowling.bowlingleaguemanager.entity.Series;
import com.bowling.bowlingleaguemanager.repository.BowlerRepository;
import com.bowling.bowlingleaguemanager.service.BowlerService;
import com.bowling.bowlingleaguemanager.service.SeriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bowlingleaguemanager") // Base path for all endpoints in this controller
public class SeriesController {

    @Autowired
    private SeriesService seriesService;

    @Autowired
    private BowlerService bowlerService;
    @Autowired
    private BowlerRepository bowlerRepository;

    // Endpoint to retrieve all seriess
    @GetMapping("/series/getall")
    public ResponseEntity<List<Series>> getAllSeries() {
        List<Series> series = seriesService.getAllSeries(); // Call service method to get all series
        return new ResponseEntity<>(series, HttpStatus.OK); // Return series with HTTP status 200 (OK)
    }

    // Endpoint to retrieve a specific series by ID
    @GetMapping("/series/get")
    public ResponseEntity<Series> getSeriesById(@RequestParam("seriesId") long id) {
        Series series = seriesService.getSeriesById(id); // Call service method to get series by ID
        if (series != null) {
            return new ResponseEntity<>(series, HttpStatus.OK); // Return series with HTTP status 200 (OK) if found
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Return HTTP status 404 (NOT FOUND) if series not found
        }
    }

    // Endpoint to create a new series
    @PostMapping("/series/add")
    public ResponseEntity<Series> createSeries(@RequestBody Series series) {
        Series createdSeries = seriesService.createSeries(series); // Call service method to create a new series
        bowlerService.updateBowlerStats(series.getBowlerId());
        return new ResponseEntity<>(createdSeries, HttpStatus.CREATED); // Return created series with HTTP status 201 (CREATED)
    }

    // Endpoint to update an existing series
    @PutMapping("/series/update")
    public ResponseEntity<Series> updateSeries(@RequestParam("seriesId") long id, @RequestBody Series updatedSeries) {
        Series existingSeries = seriesService.getSeriesById(id); // Call service method to get existing series by ID
        if (existingSeries != null) {
            Series updated = seriesService.updateSeries(id, updatedSeries); // Call service method to update the series
            bowlerService.updateBowlerStats(updatedSeries.getBowlerId());
            return new ResponseEntity<>(updated, HttpStatus.OK); // Return updated series with HTTP status 200 (OK)
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Return HTTP status 404 (NOT FOUND) if series not found
        }
    }

    // Endpoint to delete a series
    @DeleteMapping("/series/delete")
    public ResponseEntity<Void> deleteSeries(@RequestParam("seriesId") long id) {
        Series series = seriesService.getSeriesById(id); // Call service method to get series by ID
        if (series != null) {
            seriesService.deleteSeries(id); // Call service method to delete the series
            bowlerService.updateBowlerStats(series.getBowlerId());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // Return HTTP status 204 (NO CONTENT) indicating successful deletion
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Return HTTP status 404 (NOT FOUND) if series not found
        }
    }
}

