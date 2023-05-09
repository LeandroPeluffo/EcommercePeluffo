import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ItemListContainer.css";

import "./ItemListContainer";
import Spinner from "../Spinner/Spinner";

//FIREBASE

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [ProductosData, setProductosData] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    const getProductos = async () => {
      const q = query(collection(db, "Productos")); //mismo nombre que la colección
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setProductosData(docs);
    };
    getProductos();
    setTimeout(() => {
      SetIsLoading(false);
    }, 1000);
  }, []);
  console.log(ProductosData);
  return (
    <>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div className="CardListContainer">
          {ProductosData.map((data) => {
            return (
              <Link
                className="CardListItem"
                to={`/detalle/${data.id}`}
                style={{ textDecoration: "none" }}
                key={data.id}
              >
                <ItemList ProductosData={data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ItemListContainer;

/* import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';


const CardProducto = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardProducto


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

export default CardProducto*/
