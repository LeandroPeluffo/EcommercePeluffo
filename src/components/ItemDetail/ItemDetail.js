import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Button } from "@mui/material";

const ItemDetail = ({producto}) => {
  return (
    <Card className="ItemDetail" sx={{ maxWidth: 345, m: 4 }}>
    <CardActionArea>
      <CardMedia component="img" image={producto.img ? producto.img : ""} alt="IMG PRODUCTO" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto.nombre}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {producto.categoria}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {producto.precio} | stock: {producto.stock}
        </Typography>
        <Button>
          Agregar al Carrito
        </Button>
        {/* faltaria poner el compoennte contador */}
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default ItemDetail