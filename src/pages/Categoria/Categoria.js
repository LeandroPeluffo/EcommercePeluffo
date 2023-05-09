import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

// COMPONENTS

import ItemList from "../../components/ItemList/ItemList";



const Categoria = () => {
  const [ProductosData, setProductosData] = useState([]);

  let { categoria } = useParams();

  useEffect(() => {
    const getProductos = async () => {
      const q = query(collection(db, "Productos"), where("categoria", "==", Categoria));
      const docs = [];
      const querySnapshot = await getDocs(q);
      
      querySnapshot.forEach((doc) => {
        
        docs.push({ ...doc.data(), id: doc.id });
      });
      
      setProductosData(docs);
    };
    getProductos();
  }, [categoria]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Productos Por Categoria</h1>
      {ProductosData.map((data) => {
        return <ItemList ProductosData={data} key={data.id} />;
      })}
    </div>
  );
};

export default Categoria;