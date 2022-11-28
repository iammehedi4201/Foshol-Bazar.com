import React, { useEffect, useState } from 'react';
import "./Shop.css"

const Shop = (props) => {

    const {value}=props

    // console.log("The value is:",value);

     const [products,setProducts]=useState([]);

     useEffect(()=>{

          fetch("product.json")
          .then((Response)=>Response.json())
          .then((data)=>setProducts(data))

     },[])

    

    return (
        <div>
            
        </div>
    );
};

export default Shop;