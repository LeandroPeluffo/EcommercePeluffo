import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import img from "./buzo-deportivo.jpg"


const CardProductos = ({ img, nombre, descripción, precio }) => {
  return (
    <Card sx={{ maxWidth: 300}}>
      <CardActionArea>
        <CardMedia component= "img" image={img} alt="buzo" />
        <CardContent>
          <Typography gutterBottom variant='h5' component="div">
            {nombre}
          </Typography>
          <Typography variant="body2" color= "text.secondary">
            {descripción}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardProductos