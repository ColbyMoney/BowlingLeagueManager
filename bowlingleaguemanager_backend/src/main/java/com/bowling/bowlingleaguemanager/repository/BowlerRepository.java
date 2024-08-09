package com.bowling.bowlingleaguemanager.repository;

import com.bowling.bowlingleaguemanager.entity.Bowler;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BowlerRepository extends JpaRepository<Bowler, Long> {
    // You can add custom query methods here if needed
}
