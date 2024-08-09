import * as React from 'react';
import {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container,Paper,Button } from '@mui/material';

export default function GetBowler() {
    const paperStyle={padding:"50px 20px", width:600,margin:"20px auto"}
    const[bowlerId,setBowlerId]=useState("")
    let [staticId,setStaticId]=useState("")
    const[bowlers,setBowlers]=useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        fetch("http://localhost:8080/bowlingleaguemanager/bowler/get?bowlerId=" + bowlerId)
        .then(res=>res.json())
        .then((result)=>{
            setBowlers(result);
        });
        staticId = bowlerId;
        console.log("Bowler retrieved with bowlerID: " + staticId);
    }

    // useEffect(()=>{
        
        
    // },[staticId])

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"blue"}}>Get Bowler by ID</h1>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}

            autoComplete="off"
            >
            <TextField id="outlined-basic" label="Bowler ID" variant="outlined" fullWidth
            value={bowlerId}
            onChange={(e)=>setBowlerId(e.target.value)}/>
            <Button variant="contained" color="secondary" onClick={handleClick}>
                Get Bowler
            </Button>
            </Box>
        </Paper>

        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>Retrieved Bowler</h1>
            {[bowlers].map(bowler=>(
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