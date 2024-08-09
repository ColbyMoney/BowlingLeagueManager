import * as React from 'react';
import {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container,Paper,Button } from '@mui/material';

export default function GetSeries() {
    const paperStyle={padding:"50px 20px", width:600,margin:"20px auto"}
    const[seriesId,setSeriesId]=useState("")
    let [staticId,setStaticId]=useState("")
    const[series,setSeries]=useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        fetch("http://localhost:8080/bowlingleaguemanager/series/get?seriesId=" + seriesId)
        .then(res=>res.json())
        .then((result)=>{
            setSeries(result);
        });
        staticId = seriesId;
        console.log("Series retrieved with seriesID: " + staticId);
    }

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"blue"}}>Get Series by ID</h1>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}

            autoComplete="off"
            >
            <TextField id="outlined-basic" label="Series ID" variant="outlined" fullWidth
            value={seriesId}
            onChange={(e)=>setSeriesId(e.target.value)}/>
            <Button variant="contained" color="secondary" onClick={handleClick}>
                Get Series
            </Button>
            </Box>
        </Paper>

        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>Retrieved Series</h1>
            {[series].map(series=>(
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