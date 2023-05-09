import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
  CardActions,
} from "@mui/material";

const ItemList = ({ ProductosData }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={ProductosData.img ? ProductosData.img : ""}
          alt="IMG PRODUCTO"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {ProductosData.nombre}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {ProductosData.categoria}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {ProductosData.precio} | stock: {ProductosData.stock}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small">
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemList;
