import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Button } from "@mui/material";

const ItemList = ({ ProductosData }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 4 }}>
      <CardActionArea>
        <CardMedia component="img" image={ProductosData.img ? ProductosData.img : ""} alt="IMG PRODUCTO" />
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
          <Button>
          Agregar al Carrito
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};


export default ItemList;