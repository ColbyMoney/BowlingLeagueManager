package com.bowling.bowlingleaguemanager.service;

import java.util.List;

import com.bowling.bowlingleaguemanager.entity.Series;
import org.springframework.data.repository.query.Param;

public interface SeriesService {
    public List<Series> getAllSeries();

    // Retrieve a specific series by ID
    public Series getSeriesById(long id);

    // Create a new series
    public Series createSeries(Series series);

    // Update an existing series
    public Series updateSeries(Long id, Series updatedSeries);

    // Delete a series by ID
    public void deleteSeries(long id);

    //get total pins
    Integer getTotalPinsByBowlerId(Long bowlerId);

    //get number of games bowled
    Integer getTotalGamesBowledByBowlerId(Long bowlerId);

    //get highest game
    public Integer getHighestGameByBowlerId(Long bowlerId);

    //get highest series
    public Integer getHighestSeriesByBowlerId(Long bowlerId);
}
