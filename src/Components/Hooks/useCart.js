import { useEffect, useState } from "react"
import { storedCart } from "../LocalStorage/Database";
import Product from "../Product/Product";

const useCart =(products)=>{

     const [cartProduct,setCartProducts]=useState([]);

     useEffect(()=>{

         const storedCartItem =storedCart();

         const savedCart =[];

         for (const id in storedCartItem) {
            
              const getProduct = products.find((product)=>product.id === id)

              if (getProduct) {

                 const quantity = storedCartItem[id];

                 getProduct.quantity = quantity;

                 savedCart.push(getProduct);
                
              }

         }

         setCartProducts(savedCart);

       

     },[products])
  
    return [cartProduct,setCartProducts];

}

export default useCart;