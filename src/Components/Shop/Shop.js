import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = (props) => {
  const { value } = props;

  // console.log("The value is:",value);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((Response) => Response.json())
      .then((data) => setProducts(data));
  }, []);

  const selectedProduct = products.filter((product) => product.name === value);

//   console.log("The selected Product is:", selectedProduct);

  return (
    <div className="shop-section">
      <div className="product-section row row-cols-1 row-cols-md-3 g-4">
        {selectedProduct.map((item) => (
          <Product
          
          item={item}
          key={item.id}

          ></Product>
        ))}
      </div>

      <div className="cart-section"></div>
    </div>
  );
};

export default Shop;
