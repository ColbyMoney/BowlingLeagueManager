import * as React from 'react';
import {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container,Paper,Button } from '@mui/material';

export default function GetBowler() {
    const paperStyle={padding:"50px 20px", width:600,margin:"20px auto"}
    const[bowlerId,setBowlerId]=useState("")
    const[staticId,setStaticId]=useState("")

    const handleClick=(e)=>{
        e.preventDefault()
        fetch("http://localhost:8080/bowlingleaguemanager/bowler/delete?bowlerId=" + bowlerId,{
            method: "DELETE"})
            .then(()=>{
                console.log("Bowler deleted.")
            })
    }

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"blue"}}>Delete Bowler by ID</h1>
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
                Delete Bowler
            </Button>
            </Box>
        </Paper>
    </Container>
  );
}