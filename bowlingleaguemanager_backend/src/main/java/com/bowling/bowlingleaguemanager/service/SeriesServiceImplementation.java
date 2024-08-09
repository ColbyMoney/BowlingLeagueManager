package com.bowling.bowlingleaguemanager.service;

import com.bowling.bowlingleaguemanager.entity.Bowler;
import com.bowling.bowlingleaguemanager.entity.Series;
import com.bowling.bowlingleaguemanager.repository.SeriesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SeriesServiceImplementation implements SeriesService{

    @Autowired
    private SeriesRepository seriesRepository;


    // public SeriesServiceImplementation(SeriesRepository seriesRepository) {
    //     this.seriesRepository = seriesRepository;
    // }

    // Retrieve all series
    public List<Series> getAllSeries() {
        return seriesRepository.findAll();
    }

    // Retrieve a specific series by ID
    public Series getSeriesById(long id) {
        Optional<Series> optionalSeries = seriesRepository.findById(id);
        return optionalSeries.orElseThrow(() -> new RuntimeException("Series not found with id: " + id));
    }

    // Create a new series
    public Series createSeries(Series series) {
        return seriesRepository.save(series);
    }

    // Update an existing series
    public Series updateSeries(Long id, Series updatedSeries) {
        Optional<Series> optionalSeries = seriesRepository.findById(id);

        if (optionalSeries.isPresent()) {
            Series existingSeries = optionalSeries.get();
            existingSeries.setBowlerId(updatedSeries.getBowlerId());
            existingSeries.setGame1(updatedSeries.getGame1());
            existingSeries.setGame2(updatedSeries.getGame2());
            existingSeries.setGame3(updatedSeries.getGame3());
            existingSeries.setSeries(updatedSeries.getSeries());
            return seriesRepository.save(existingSeries);
        } else {
            // Handle the case when the Series with the given id does not exist
            // You can throw an exception or handle it as per your requirement
            throw new RuntimeException("Series not found with id " + id);
        }
    }

    // Delete a series by ID
    public void deleteSeries(long id) {
        seriesRepository.deleteById(id);
    }

    public Integer getTotalPinsByBowlerId(Long bowlerId) {
        return seriesRepository.getTotalPinsByBowlerId(bowlerId);
    }

    public Integer getTotalGamesBowledByBowlerId(Long bowlerId) {
        return seriesRepository.getTotalGamesBowledByBowlerId(bowlerId);
    }

    public Integer getHighestGameByBowlerId(Long bowlerId) {
        return seriesRepository.getHighestGameByBowlerId(bowlerId);
    }

    public Integer getHighestSeriesByBowlerId(Long bowlerId) {
        return seriesRepository.getHighestGameByBowlerId(bowlerId);
    }
}
