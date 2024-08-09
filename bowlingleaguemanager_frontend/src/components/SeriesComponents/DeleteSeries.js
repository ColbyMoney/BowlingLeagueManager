import * as React from 'react';
import {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container,Paper,Button } from '@mui/material';

export default function GetSeries() {
    const paperStyle={padding:"50px 20px", width:600,margin:"20px auto"}
    const[seriesId,setSeriesId]=useState("")
    const[staticId,setStaticId]=useState("")

    const handleClick=(e)=>{
        e.preventDefault()
        fetch("http://localhost:8080/bowlingleaguemanager/series/delete?seriesId=" + seriesId,{
            method: "DELETE"})
            .then(()=>{
                console.log("Series deleted.")
            })
    }

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"blue"}}>Delete Series by ID</h1>
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
                Delete Series
            </Button>
            </Box>
        </Paper>
    </Container>
  );
}