import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { db } from '../../firebase/firebaseConfig'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const[producto, setProducto]=useState({})
    //traemos el dato del params
    const {idDetalle}=useParams()
    //hacemos la peticion a firebase de un documento
    useEffect(() => {
        const getProducto = async () => {
          const q = doc(db, "Productos", idDetalle)
          const querySnapshot = await getDoc(q);
          setProducto(({ ...querySnapshot.data(), id: querySnapshot.id}));
        };
        getProducto();
      }, [idDetalle]);

    
  return (
    <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer