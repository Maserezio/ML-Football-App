import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import { useEffect, useState } from 'react';
import axios from 'axios';



function MatchCard(props){

  const [data, setData] = useState([]);

  useEffect(()=>{ // на страницах лиг запросы отличаются
    axios.get('http://127.0.0.1:8000/pred/', {
      params: {
        HomeTeam: props.match.homeTeam.shortName,
        AwayTeam: props.match.awayTeam.shortName,
        Date: (props.match.utcDate).slice(0, 10),
      }
    }).then(res=>{
        console.log(res.data)
        setData(res.data)
      });
    },[])

  
    return (
      <Card sx={{ 
      }}>
        <CardContent>
          <Grid container spacing={3} 
            direction="row"
            alignItems="center"
            justifyContent="center">
          <Grid item xs={2}>
            <CardMedia
              component="img"
              image={props.match.competition.emblem}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {props.match.competition.name}
            </Typography>
            </Grid>
            <Grid item xs={5}>
            <CardMedia
              component="svg"
              viewBox= "0 0 100 100"
              width="100%"
              image={props.match.homeTeam.crest}
            />
            <Typography align="center" variant="h6" >
              {props.match.homeTeam.shortName}
            </Typography>
            </Grid>
            <Grid item xs={5} >
              <CardMedia
                component="svg"
                viewBox= "0 0 100 100"
                width="100%"
                image={props.match.awayTeam.crest}
              />
              <Typography align="center" variant="h6" >
                {props.match.awayTeam.shortName}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography align="center" variant="h6" >
                H 
              </Typography>
              {typeof data.H === 'undefined' ? (
                    <Typography align="center" variant="h6" >
                      ...
                    </Typography>
                  ) : (
                    <Typography align="center" variant="h6" >
                    {data.H.toFixed(2)}
                  </Typography>
                )}
            </Grid>
            <Grid item xs={3}>
              <Typography align="center" variant="h6" >
                D 
              </Typography>
              { typeof data.D === 'undefined' ? (
                    <Typography align="center" variant="h6" >
                      ...
                    </Typography>
                  ) : (
                    <Typography align="center" variant="h6" >
                    {data.D.toFixed(2)}
                  </Typography>
                )}
            </Grid>
            <Grid item xs={3}>
              <Typography align="center" variant="h6" >
                A
              </Typography>
              {typeof data.A === 'undefined' ? (
                    <Typography align="center" variant="h6" >
                      ...
                    </Typography>
                  ) : (
                    <Typography align="center" variant="h6" >
                    {data.A.toFixed(2)}
                  </Typography>
                )}
            </Grid>
  
          </Grid>
        </CardContent>
      </Card>
    );
  
}

export default MatchCard;