import * as React from 'react';
import {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container,Paper,Button } from '@mui/material';

export default function CreateBowler() {
    const paperStyle={padding:"50px 20px", width:600,margin:"20px auto"}
    const [bowlerId,setBowlerId]=useState("")
    let [staticId,setStaticId]=useState("")
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [bowler,setBowlers]=useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const bowler={bowlerId, firstName, lastName}
        console.log(bowler)
        fetch("http://localhost:8080/bowlingleaguemanager/bowler/update?bowlerId=" + bowlerId,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(bowler)
        }).then(()=>{
            console.log("Bowler " + bowlerId + " updated.")
        })
    }

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"blue"}}>Update Bowler</h1>
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
            <TextField id="outlined-basic" label="Bowler First Name" variant="outlined" fullWidth
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}/>
            <TextField id="outlined-basic" label="Bowler Last Name" variant="outlined" fullWidth
            type="text"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}/>
            <Button variant="contained" color="secondary" onClick={handleClick}>
                Update Bowler
            </Button>
            </Box>
        </Paper>
    </Container>
  );
}