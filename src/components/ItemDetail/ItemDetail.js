import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Button, CardActions } from "@mui/material";
import Box from "@mui/material/Box";

const ItemDetail = ({ producto }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardActionArea className="ItemDetail">
          <CardMedia
            component="img"
            image={producto.img ? producto.img : ""}
            alt="IMG PRODUCTO"
          />
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
            {/* faltaria poner el compoennte contador */}
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button variant="contained" size="small">
            Agregar al carrito
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ItemDetail;
