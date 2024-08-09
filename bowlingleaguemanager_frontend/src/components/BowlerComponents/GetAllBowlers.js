import * as React from 'react';
import {useState, useEffect} from "react";
import { Container,Paper } from '@mui/material';

export default function GetAllBowlers() {
    const paperStyle={padding:"50px 20px", width:600,margin:"20px auto"}
    const[bowlers,setBowlers]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/bowlingleaguemanager/bowler/getall")
        .then(res=>res.json())
        .then((result)=>{
            setBowlers(result);
        })
    },[])

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>All Bowlers</h1>
            {bowlers.map(bowler=>(
                <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={bowler.bowlerId}>
                    BowlerId: {bowler.bowlerId}<br/>
                    First Name: {bowler.firstName}<br/>
                    Last Name: {bowler.lastName}<br/>
                    Average: {bowler.average}<br/>
                    Total Pins: {bowler.totalPins}<br/>
                    Total Games Bowled: {bowler.totalGamesBowled}<br/>
                    Highest Game: {bowler.highestGame}<br/>
                    Highest Series: {bowler.highestSeries}<br/>
                </Paper>
            ))}
            
        </Paper>
    </Container>
  );
}