package com.bowling.bowlingleaguemanager.repository;

import com.bowling.bowlingleaguemanager.entity.Series;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SeriesRepository extends JpaRepository<Series, Long> {
    // You can add custom query methods here if needed

    //get total pins
    @Query("SELECT SUM(s.series) FROM Series s WHERE s.bowlerId = :bowlerId")
    Integer getTotalPinsByBowlerId(@Param("bowlerId") Long bowlerId);

    //get total games bowled
    @Query("SELECT SUM(CASE WHEN s.game1 IS NOT NULL THEN 1 ELSE 0 END + " +
            "CASE WHEN s.game2 IS NOT NULL THEN 1 ELSE 0 END + " +
            "CASE WHEN s.game3 IS NOT NULL THEN 1 ELSE 0 END) " +
            "FROM Series s WHERE s.bowlerId = :bowlerId")
    Integer getTotalGamesBowledByBowlerId(@Param("bowlerId") Long bowlerId);

    //get highest game
    @Query("SELECT MAX(GREATEST(s.game1, s.game2, s.game3)) FROM Series s WHERE s.bowlerId = :bowlerId")
    Integer getHighestGameByBowlerId(@Param("bowlerId") Long bowlerId);

    //get highest series
    @Query("SELECT MAX(s.series) FROM Series s WHERE s.bowlerId = :bowlerId")
    Integer getHighestSeriesByBowlerId(@Param("bowlerId") Long bowlerId);






}
