import * as React from 'react';
import {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container,Paper,Button } from '@mui/material';

export default function Bowler() {
    const paperStyle={padding:"50px 20px", width:600,margin:"20px auto"}
    const[name,setName]=useState("")
    const[average,setAverage]=useState("")
    const[bowlers,setBowlers]=useState([])

    const handleClick=(e)=>{
        // e.preventDefault()
        // const bowler={name,average}
        // console.log(bowler)
        // fetch("http://localhost:8080/bowlingleaguemanager/bowler/getall",{
        //     method:"POST",
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify(bowler)
        // }).then(()=>{
        //     console.log("New Bowler added")
        // })
    }

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
        <h1 style={{color:"blue"}}>Add Bowler</h1>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            Validate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="Bowler Name" variant="outlined" fullWidth
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
            <TextField id="outlined-basic" label="Bowler Average" variant="outlined" fullWidth
            type="number"
            min="0"
            max="300"
            value={average}
            onChange={(e)=>setAverage(e.target.value)}/>
            <Button variant="contained" color="secondary" onClick={handleClick}>
                Submit
            </Button>
            </Box>
        </Paper>

        
        <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"blue"}}>Bowlers</h1>
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