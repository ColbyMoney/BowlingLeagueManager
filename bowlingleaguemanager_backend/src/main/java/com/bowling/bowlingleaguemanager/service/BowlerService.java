package com.bowling.bowlingleaguemanager.service;

import java.util.List;

import com.bowling.bowlingleaguemanager.entity.Bowler;

public interface BowlerService {
    public List<Bowler> getAllBowlers();

    // Retrieve a specific bowler by ID
    public Bowler getBowlerById(long id);

    // Create a new bowler
    public Bowler createBowler(Bowler bowler);

    // Update an existing bowler
    public Bowler updateBowler(Long id, Bowler updatedBowler);

    // Delete a bowler by ID
    public void deleteBowler(long id);

    // update a bowler's high game and series
    public void updateBowlerStats(long bowlerId);
}
