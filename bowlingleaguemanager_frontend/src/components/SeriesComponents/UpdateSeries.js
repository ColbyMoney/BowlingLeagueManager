import * as React from 'react';
import {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container,Paper,Button } from '@mui/material';

export default function CreateBowler() {
    const paperStyle={padding:"50px 20px", width:600,margin:"20px auto"}
    const [seriesId,setSeriesId]=useState("")
    const[bowlerId,setBowlerId]=useState("")
    const[game1,setGame1]=useState("")
    const[game2,setGame2]=useState("")
    const[game3,setGame3]=useState("")
    // const[series,setSeries]=useState("")
    const[seriesObject,setSeriesObject]=useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const series = +game1 + +game2 + +game3;
        console.log(series);
        const seriesObject={seriesId, bowlerId, game1, game2, game3, series}
        console.log(seriesObject)
        fetch("http://localhost:8080/bowlingleaguemanager/series/update?seriesId=" + seriesId,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(seriesObject)
        }).then(()=>{
            console.log("Series " + seriesId + " updated")
        })
    }

    // useEffect(()=>{
    //     fetch("http://localhost:8080/bowlingleaguemanager/series/add")
    //     .then(res=>res.json())
    //     .then((result)=>{
    //         setSeriesObject(result);
    //     })
    // },[])

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"blue"}}>Update Series</h1>
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

            <TextField id="outlined-basic" label="Bowler ID" variant="outlined" fullWidth
            value={bowlerId}
            onChange={(e)=>setBowlerId(e.target.value)}/>

            <TextField id="outlined-basic" label="Game 1 Score" variant="outlined" fullWidth
            type="number"
            min="0"
            max="300"
            value={game1}
            onChange={(e)=>setGame1(e.target.value)}/>

            <TextField id="outlined-basic" label="Game 2 Score" variant="outlined" fullWidth
            type="number"
            min="0"
            max="300"
            value={game2}
            onChange={(e)=>setGame2(e.target.value)}/>

            <TextField id="outlined-basic" label="Game 3 Score" variant="outlined" fullWidth
            type="number"
            min="0"
            max="300"
            value={game3}
            onChange={(e)=>setGame3(e.target.value)}/>

            <text>Series: {+game1 + +game2 + +game3}</text>

            

            <Button variant="contained" color="secondary" onClick={handleClick}>
                Update Series
            </Button>
            </Box>
        </Paper>
    </Container>
  );
}