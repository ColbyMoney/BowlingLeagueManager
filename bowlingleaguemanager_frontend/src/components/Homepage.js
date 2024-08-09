import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function Homepage() {
    const navigate = useNavigate();

    const handleCreateBowlerClick=()=>{
        navigate("/createBowler");
    }
    const handleGetBowlerClick=()=>{
        navigate("/getBowler");
    }
    const handleGetAllBowlersClick=()=>{
        navigate("/getAllBowlers");
    }
    const handleUpdateBowlerClick=()=>{
        navigate("/updateBowler");
    }
    const handleDeleteBowlerClick=()=>{
        navigate("/deleteBowler");
    }
    const handleCreateSeriesClick=()=>{
        navigate("/createSeries");
    }
    const handleGetSeriesClick=()=>{
        navigate("/getSeries");
    }
    const handleGetAllSeriesClick=()=>{
        navigate("/getAllSeries");
    }
    const handleUpdateSeriesClick=()=>{
        navigate("/updateSeries");
    }
    const handleDeleteSeriesClick=()=>{
        navigate("/deleteSeries");
    }

    const bowlerButtons = [
        <Button key="createBowler" onClick={handleCreateBowlerClick}>Create Bowler</Button>,
        <Button key="getBowler" onClick={handleGetBowlerClick}>Get Bowler</Button>,
        <Button key="getAllBowlers" onClick={handleGetAllBowlersClick}>Get All Bowlers</Button>,
        <Button key="updateBowler" onClick={handleUpdateBowlerClick}>Update Bowler</Button>,
        <Button key="deleteBowler" onClick={handleDeleteBowlerClick}>Delete Bowler</Button>,
      ];
    
      const seriesButtons = [
        <Button key="createSeries" onClick={handleCreateSeriesClick}>Create Series</Button>,
        <Button key="getSeries" onClick={handleGetSeriesClick}>Get Series</Button>,
        <Button key="getAllSeries" onClick={handleGetAllSeriesClick}>Get All Series</Button>,
        <Button key="updateSeries" onClick={handleUpdateSeriesClick}>Update Series</Button>,
        <Button key="deleteSeries" onClick={handleDeleteSeriesClick}>Delete Series</Button>,
      ];

    

    return (
        <Container>
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& > *': {
                m: 1,
                },
            }}
            >
                <ButtonGroup
                    orientation="vertical"
                    aria-label="Vertical button group"
                    variant="contained"
                >
                    {bowlerButtons}
                </ButtonGroup>

                <ButtonGroup
                    orientation="vertical"
                    aria-label="Vertical button group"
                    variant="contained"
                >
                    {seriesButtons}
                </ButtonGroup>
            </Box>
        </Container>
      );
}

