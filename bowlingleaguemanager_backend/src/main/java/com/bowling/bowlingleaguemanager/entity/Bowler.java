package com.bowling.bowlingleaguemanager.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Bowler {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private long bowlerId;

    private String firstName;
    private String lastName;
    private int totalPins;
    private int totalGamesBowled;
    private float average;
    private int highestGame;
    private int highestSeries;

    public Bowler() {
        this.firstName = "";
        this.lastName = "";
        this.totalPins = 0;
        this.totalGamesBowled = 0;
        this.average = 0;
        this.highestGame = 0;
        this.highestSeries = 0;
    }

    @JsonCreator
    public Bowler(@JsonProperty("bowlerId") int bowlerId,
                  @JsonProperty("firstName") String firstName,
                  @JsonProperty("lastName") String lastName,
                  @JsonProperty("totalPins") int totalPins,
                  @JsonProperty("totalGamesBowled") int totalGamesBowled,
                  @JsonProperty("average") float average,
                  @JsonProperty("highestGame") int highestGame,
                  @JsonProperty("highestSeries") int highestSeries) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.totalPins = totalPins;
        this.totalGamesBowled = totalGamesBowled;
        this.average = average;
        this.highestGame = highestGame;
        this.highestSeries = highestSeries;
    }

    @JsonCreator
    public Bowler(@JsonProperty("firstName") String firstName,
                  @JsonProperty("lastName") String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.totalPins = 0;
        this.totalGamesBowled = 0;
        this.average = 0;
        this.highestGame = 0;
        this.highestSeries = 0;
    }

    // Getters and setters for each field
    public long getBowlerId() { return bowlerId; }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getTotalPins() {
        return totalPins;
    }

    public void setTotalPins(int totalPins) {
        this.totalPins = totalPins;
    }

    public int getTotalGamesBowled() {
        return totalGamesBowled;
    }

    public void setTotalGamesBowled(int totalGamesBowled) {
        this.totalGamesBowled = totalGamesBowled;
    }

    public float getAverage() {
        return average;
    }

    public void setAverage(int average) {
        this.average = average;
    }

    public int getHighestGame() {
        return highestGame;
    }

    public void setHighestGame(int highestGame) {
        this.highestGame = highestGame;
    }

    public int getHighestSeries() {
        return highestSeries;
    }

    public void setHighestSeries(int highestSeries) {
        this.highestSeries = highestSeries;
    }

}

