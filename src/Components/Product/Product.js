import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {


//   console.log(props);

  const { img, name, price, shipping, stock, ratings } = props.item;

  const {addToCart} = props;

  return (
    <div className="col product">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price:-{price}</p>
          <p className="card-text">Shipping:-{shipping}</p>
          <p className="card-text">Rating :-{ratings}</p>
          <p className="card-text">Stock :-{stock}</p>
        </div>
        <div className="card-footer">
          <div class="d-grid gap-2">
            <button  onClick={()=>addToCart(props.item)}  class="btn btn-danger" type="button">
               ADD TO CART
              <FontAwesomeIcon icon={faShoppingCart}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
