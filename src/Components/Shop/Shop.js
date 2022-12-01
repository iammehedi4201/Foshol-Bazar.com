import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { addToDb, deleteAProductFormDb, storedCart } from "../LocalStorage/Database";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = (props) => {
  const { value } = props;

  // console.log("The value is:",value);

  const [products, setProducts] = useState([]);

  const [cartProduct,setCartProducts]=useState([])

  useEffect(() => {
    fetch("product.json")
      .then((Response) => Response.json())
      .then((data) => setProducts(data));
  }, []);




  const selectedProduct = products.filter((product) => product.name === value);

  useEffect(()=>{

    const storedCartItem = storedCart();

   //  console.log("The stored cart item is:",storedCartItem);

   let cartUpdate =[];

   for (const product in storedCartItem) {
          
        const getProduct =products.find(item=>item.id === product)

        if (getProduct) {

            const quntaity = storedCartItem[product];

            getProduct.quantity = quntaity;

            cartUpdate.push(getProduct);
          
        }  

        console.log("The get Product is:",getProduct);
     }

       setCartProducts(cartUpdate);

   }

 ,[products])

 
 console.log("The car Product is ",cartProduct);

  const addToCart =(productDetails)=>{

    // if (cartProduct.includes(productDetails)) {

    //      alert("It's already in cart ")
      
    // }

    // else{
  
    //     const newCartProduct =[...cartProduct,productDetails];
      
    //     setCartProducts(newCartProduct);

    // }
    let  newCartProduct =[]

    const checkProductExistense =cartProduct.find(item=>item.id === productDetails.id);

    if (!checkProductExistense) {

         productDetails.quantity = 1;

         newCartProduct =[...cartProduct,productDetails];
      
    }

    else{

       const rest = cartProduct.filter(item=>item.id !== productDetails.id )

       productDetails.quantity =productDetails.quantity +1;

       newCartProduct=[...rest,productDetails]

    }

  
      
    setCartProducts(newCartProduct);

    addToDb(productDetails.id);

  }

  //Delete a Product form cart

  const deleteAProduct = (productId)=>{

    const restCartItem =cartProduct.filter(item=>item.id !==productId);

    if (restCartItem) {

      setCartProducts(restCartItem);

      deleteAProductFormDb(productId);

    }

  
}


  // console.log("The cart product is:",cartProduct);

//   console.log("The selected Product is:", selectedProduct);

  return (
    <div className="shop-section">
      <div className="product-section row row-cols-1 row-cols-md-3 g-4">
        {selectedProduct.map((item) => (
          <Product
          
          item={item}
          key={item.id}
          addToCart ={addToCart}

          ></Product>
        ))}
      </div>

      <div className="cart-section">
          <Cart
             cartProduct={cartProduct}
             deleteAProduct={deleteAProduct}
          ></Cart>
      </div>
    </div>
  );
};

export default Shop;
