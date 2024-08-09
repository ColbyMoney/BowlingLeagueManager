import * as React from 'react';
import {useState, useEffect} from "react";
import { Container,Paper } from '@mui/material';

export default function GetAllSeries() {
    const paperStyle={padding:"50px 20px", width:600,margin:"20px auto"}
    const[series,setSeries]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/bowlingleaguemanager/series/getall")
        .then(res=>res.json())
        .then((result)=>{
            setSeries(result);
        })
    },[])

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>All Series</h1>
            {series.map(series=>(
                <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={series.seriesId}>
                    SeriesId: {series.seriesId}<br/>
                    BowlerId: {series.bowlerId}<br/>
                    Game 1: {series.game1}<br/>
                    Game 2: {series.game2}<br/>
                    Game 3: {series.game3}<br/>
                    Series: {series.series}<br/>
                </Paper>
            ))}
            
        </Paper>
    </Container>
  );
}