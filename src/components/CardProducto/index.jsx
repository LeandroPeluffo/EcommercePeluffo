import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const CardProducto = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 300}} sb>
      <CardActionArea className='CardActionArea'>
        <CardMedia 
        component= "img" 
        image={data.img} 
        alt="Foto Producto" 
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component="div">
            {data.Nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${data.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardProducto