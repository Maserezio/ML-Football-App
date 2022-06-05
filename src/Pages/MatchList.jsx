import "../App.css";
import Header from '../Components/Header';
import StickyFooter from '../Components/Footer';
import MatchCard  from '../Components/MatchCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import axios from 'axios';


function MatchList(props) {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('https://football-ml-app-server.herokuapp.com/matches/',{
        params: {
          League: props.league,
        }
    }).then(res=>{
        console.log(res.data.matches)
        setData(res.data.matches)
      });
    },[])


  return (
    <Container maxWidth="false">
      <Header/>
      <Grid container spacing={3}
        alignItems="center"
        justifyContent="center"
        mt={2}
        mb={2}

      >
        {data.map(match =>
            <Grid item xs={3}>
                <MatchCard match={match} key={match.id}/>
            </Grid> 
        )}
      </Grid>
     <StickyFooter/>
    </Container>
    
  
    );
}

export default MatchList;
