package com.bowling.bowlingleaguemanager.controller;

import com.bowling.bowlingleaguemanager.entity.Bowler;
import com.bowling.bowlingleaguemanager.service.BowlerServiceImplementation;
import com.bowling.bowlingleaguemanager.service.BowlerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bowlingleaguemanager") // Base path for all endpoints in this controller
public class BowlerController {

    @Autowired
    private BowlerService bowlerService;

    // Endpoint to retrieve all bowlers
    @GetMapping("/bowler/getall")
    public ResponseEntity<List<Bowler>> getAllBowlers() {
        List<Bowler> bowlers = bowlerService.getAllBowlers(); // Call service method to get all bowlers
        return new ResponseEntity<>(bowlers, HttpStatus.OK); // Return bowlers with HTTP status 200 (OK)
    }

    // Endpoint to retrieve a specific bowler by ID
    @GetMapping("/bowler/get")
    public ResponseEntity<Bowler> getBowlerById(@RequestParam("bowlerId") long id) {
        Bowler bowler = bowlerService.getBowlerById(id); // Call service method to get bowler by ID
        if (bowler != null) {
            return new ResponseEntity<>(bowler, HttpStatus.OK); // Return bowler with HTTP status 200 (OK) if found
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Return HTTP status 404 (NOT FOUND) if bowler not found
        }
    }

    // Endpoint to create a new bowler
    @PostMapping("/bowler/add")
    public ResponseEntity<Bowler> createBowler(@RequestBody Bowler bowler) {
        Bowler createdBowler = bowlerService.createBowler(bowler); // Call service method to create a new bowler
        return new ResponseEntity<>(createdBowler, HttpStatus.CREATED); // Return created bowler with HTTP status 201 (CREATED)
    }

    // Endpoint to update an existing bowler
    @PutMapping("/bowler/update")
    public ResponseEntity<Bowler> updateBowler(@RequestParam("bowlerId") long id, @RequestBody Bowler updatedBowler) {
        Bowler existingBowler = bowlerService.getBowlerById(id); // Call service method to get existing bowler by ID
        if (existingBowler != null) {
            Bowler updated = bowlerService.updateBowler(id, updatedBowler); // Call service method to update the bowler
            return new ResponseEntity<>(updated, HttpStatus.OK); // Return updated bowler with HTTP status 200 (OK)
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Return HTTP status 404 (NOT FOUND) if bowler not found
        }
    }

    // Endpoint to delete a bowler
    @DeleteMapping("/bowler/delete")
    public ResponseEntity<Void> deleteBowler(@RequestParam("bowlerId") long id) {
        Bowler bowler = bowlerService.getBowlerById(id); // Call service method to get bowler by ID
        if (bowler != null) {
            bowlerService.deleteBowler(id); // Call service method to delete the bowler
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // Return HTTP status 204 (NO CONTENT) indicating successful deletion
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Return HTTP status 404 (NOT FOUND) if bowler not found
        }
    }
}

