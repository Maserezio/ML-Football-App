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
  const [goals, setGoals] = useState([]);

  useEffect(()=>{ // на страницах лиг запросы отличаются
    axios.get('http://127.0.0.1:8000/pred/', {
      params: {
        HomeTeam: props.match.homeTeam.shortName,
        AwayTeam: props.match.awayTeam.shortName,
        Date: (props.match.utcDate).slice(0, 10),
      }
    }).then(res=>{
        setData(res.data)
      });
    },[])

    useEffect(()=>{ // на страницах лиг запросы отличаются
      axios.get('https://football-ml-app-server.herokuapp.com/TGpred/', {
        params: {
          HomeTeam: props.match.homeTeam.shortName,
          AwayTeam: props.match.awayTeam.shortName,
          Date: (props.match.utcDate).slice(0, 10),
        }
      }).then(res2=>{
          console.log(res2.data)
          setGoals(res2.data)
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
          <Grid item xs={3}>
            <CardMedia
              component="img"
              image={props.match.competition.emblem}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {props.match.competition.name}
            </Typography>
            </Grid>
            <Grid item xs={3}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {(props.match.utcDate).slice(0, 10)}
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
            <Grid item xs={10}>
              <Typography align="center" variant="h5" >
                Full time result: 
              </Typography>
            </Grid>
            <Grid item xs={4}>
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
            <Grid item xs={4}>
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
            <Grid item xs={4}>
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

            <Grid item xs={12}>
              <Typography align="center" variant="h5" >
                Total goals: 
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography align="center" variant="h6" >
                0 
              </Typography>
              { typeof goals.zero === 'undefined' ? (
                    <Typography align="center" variant="h6" >
                      ...
                    </Typography>
                  ) : (
                    <Typography align="center" variant="h6" >
                    {goals.zero.toFixed(2)}
                  </Typography>
                )}
            </Grid>
            <Grid item xs={2}>
              <Typography align="center" variant="h6" >
                1 
              </Typography>
              { typeof goals.one === 'undefined' ? (
                    <Typography align="center" variant="h6" >
                      ...
                    </Typography>
                  ) : (
                    <Typography align="center" variant="h6" >
                    {goals.one.toFixed(2)}
                  </Typography>
                )}
            </Grid>
            <Grid item xs={2}>
              <Typography align="center" variant="h6" >
                2 
              </Typography>
              { typeof goals.two === 'undefined' ? (
                    <Typography align="center" variant="h6" >
                      ...
                    </Typography>
                  ) : (
                    <Typography align="center" variant="h6" >
                    {goals.two.toFixed(2)}
                  </Typography>
                )}
            </Grid>
            <Grid item xs={2}>
              <Typography align="center" variant="h6" >
                3 
              </Typography>
              { typeof goals.three === 'undefined' ? (
                    <Typography align="center" variant="h6" >
                      ...
                    </Typography>
                  ) : (
                    <Typography align="center" variant="h6" >
                    {goals.three.toFixed(2)}
                  </Typography>
                )}
            </Grid>
            <Grid item xs={2}>
              <Typography align="center" variant="h6" >
                3+ 
              </Typography>
              { typeof goals.four === 'undefined' ? (
                    <Typography align="center" variant="h6" >
                      ...
                    </Typography>
                  ) : (
                    <Typography align="center" variant="h6" >
                    {(parseFloat(goals.four) + parseFloat(goals.fourp)).toFixed(2)}
                  </Typography>
                )}
            </Grid>
  
          </Grid>
        </CardContent>
      </Card>
    );
  
}

export default MatchCard;