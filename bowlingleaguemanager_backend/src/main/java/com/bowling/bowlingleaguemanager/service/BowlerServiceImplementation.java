package com.bowling.bowlingleaguemanager.service;

import com.bowling.bowlingleaguemanager.entity.Bowler;
import com.bowling.bowlingleaguemanager.repository.BowlerRepository;

import com.bowling.bowlingleaguemanager.repository.SeriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BowlerServiceImplementation implements BowlerService{

    @Autowired
    private BowlerRepository bowlerRepository;

    @Autowired
    private SeriesRepository seriesRepository;

    
    // public BowlerServiceImplementation(BowlerRepository bowlerRepository) {
    //     this.bowlerRepository = bowlerRepository;
    // }

    // Retrieve all bowlers
    public List<Bowler> getAllBowlers() {
        return bowlerRepository.findAll();
    }

    // Retrieve a specific bowler by ID
    public Bowler getBowlerById(long id) {
        Optional<Bowler> optionalBowler = bowlerRepository.findById(id);
        return optionalBowler.orElseThrow(() -> new RuntimeException("Bowler not found with id: " + id));
    }

    // Create a new bowler
    public Bowler createBowler(Bowler bowler) {
        return bowlerRepository.save(bowler);
    }

    // Update an existing bowler
    public Bowler updateBowler(Long id, Bowler updatedBowler) {
        Optional<Bowler> optionalBowler = bowlerRepository.findById(id);

        if (optionalBowler.isPresent()) {
            Bowler existingBowler = optionalBowler.get();
            existingBowler.setFirstName(updatedBowler.getFirstName());
            existingBowler.setLastName(updatedBowler.getLastName());
            return bowlerRepository.save(existingBowler);
        } else {
            // Handle the case when the Bowler with the given id does not exist
            // You can throw an exception or handle it as per your requirement
            throw new RuntimeException("Bowler not found with id " + id);
        }
    }

    // Delete a bowler by ID
    public void deleteBowler(long id) {
        bowlerRepository.deleteById(id);
    }

    //update a bowler's highest game and series
    public void updateBowlerStats(long bowlerId) {
        Integer totalPins = seriesRepository.getTotalPinsByBowlerId(bowlerId);
        Integer totalGamesBowled = seriesRepository.getTotalGamesBowledByBowlerId(bowlerId);
        Integer highestGame = seriesRepository.getHighestGameByBowlerId(bowlerId);
        Integer highestSeries = seriesRepository.getHighestSeriesByBowlerId(bowlerId);

        Bowler bowler = bowlerRepository.findById(bowlerId).orElseThrow(() -> new RuntimeException("Bowler not found"));
        bowler.setTotalPins(totalPins);
        bowler.setTotalGamesBowled(totalGamesBowled);
        bowler.setAverage(totalPins/totalGamesBowled);
        bowler.setHighestGame(highestGame);
        bowler.setHighestSeries(highestSeries);
        bowlerRepository.save(bowler);
    }
}
