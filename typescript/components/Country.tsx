import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import ModalCountry from './ModalCountry'

const Country = ({countries =[]}) => {
  return (
    <>
        {
          countries.map((item: any,index: number)=> (
            <Grid item  xs={12} sm={6} md={4}>
            <Card key={index}  sx={{ height: '100%', display: 'flex', flexDirection: 'column',  maxWidth: 345}}>
              <CardMedia component='img' image={item.flags.png}  alt='flag'/>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">{item.name.common}</Typography>   
                <Typography variant="body1"><strong> Capital: </strong>{item.capital}</Typography> 
                <Typography variant="body1"><strong> Region: </strong>{item.region}</Typography>
                <Typography variant="body1"><strong> Area: </strong>{item.area}</Typography>
                <Typography variant="body1"><strong> Population: </strong>{item.population}</Typography>      
              </CardContent>
                <CardActions>
                <ModalCountry item={item} index={index}/>
                </CardActions>
            </Card>
            </Grid>
          ))
        }
    </>
  )
}

export default Country