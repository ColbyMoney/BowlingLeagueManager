package com.bowling.bowlingleaguemanager.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Series {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private long seriesId;

    private long bowlerId;
    //i am keeping the project simple for now, i can add these later. for now im just learning spring
//    private long leagueId;
//    private long bowlingCenterId;
    private String firstName;
    private String lastName;
    private int game1;
    private int game2;
    private int game3;
    private int series;

    public Series() {
        this.firstName = "";
        this.lastName = "";
        this.game1 = 0;
        this.game2 = 0;
        this.game3 = 0;
        this.series = 0;
    }

    @JsonCreator
    public Series(@JsonProperty("bowlerId") long bowlerId,
                  @JsonProperty("game1") int game1,
                  @JsonProperty("game2") int game2,
                  @JsonProperty("game3") int game3,
                  @JsonProperty("series") int series) {
        this.bowlerId = bowlerId;
        this.firstName = "";
        this.lastName = "";
        this.game1 = game1;
        this.game2 = game2;
        this.game3 = game3;
        this.series = series;
    }

    public long getSeriesId() {
        return seriesId;
    }

    public long getBowlerId() {
        return bowlerId;
    }

    public void setBowlerId(long bowlerId) {
        this.bowlerId = bowlerId;
    }

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

    public int getGame1() {
        return game1;
    }

    public void setGame1(int game1) {
        this.game1 = game1;
    }

    public int getGame2() {
        return game2;
    }

    public void setGame2(int game2) {
        this.game2 = game2;
    }

    public int getGame3() {
        return game3;
    }

    public void setGame3(int game3) {
        this.game3 = game3;
    }

    public int getSeries() {
        return series;
    }

    public void setSeries(int series) {
        this.series = series;
    }

}
