import "../App.css";
import Header from '../Components/Header';
import StickyFooter from '../Components/Footer';
import MatchCard  from '../Components/MatchCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Main() {
  const [data, setData] = useState([]);

  useEffect(()=>{ // на страницах лиг запросы отличаются
    axios.get('/v4/matches', {
      headers: {
        'X-Auth-Token': 'e81db08975554a52be0102c53ba95211',
      }
      }).then(res=>{
        console.log(res.data.matches)
        setData(res.data.matches)
      });
    },[])


  return (
    <Container maxWidth="false">
      <Header/>
      {/* <Box sx={{ height: "500" }}> */}
          {data.length===0 ? (
                <Typography variant="h1" component="div" textAlign="center" height="4.8em" mt="3em">
                  No upcoming matches
                </Typography>
          ) : (
            <Grid container spacing={3} mt={2} mb={2} justifyContent="center">
              {data.map(match =>
                <Grid item xs={3}>
                  <MatchCard match={match} key={match.id}/>
                </Grid> 
            )}
            </Grid>
          )}
      {/* </Box> */}
     <StickyFooter/>
    </Container>
    );
}

export default Main;
