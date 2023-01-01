import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import "./Cart.css";

const Cart = (props) => {
  console.log("The Cart Pros is :", props);

  const [randomProduct, setRandomProduct] = useState("");

  const { img, name, quantity, id } = randomProduct;

  const { cartProduct } = props;

  //   console.log("The cart Product is",cartProduct);

  let sumOfTotalPrice = 0;

  let sumOfTotalShippingPrice = 0;

  let quantityValue = 0;

  for (const product of cartProduct) {
    quantityValue = quantityValue + product.quantity;

    sumOfTotalPrice = sumOfTotalPrice + product.price * product.quantity;

    sumOfTotalShippingPrice = sumOfTotalShippingPrice + product.shipping;
  }

  let tax = sumOfTotalPrice * 0.5;

  let grandTotal = sumOfTotalPrice + sumOfTotalShippingPrice;

  const sleetedRandomProduct = () => {
    const randomNumber = Math.floor(Math.random() * cartProduct.length);

    const randomItem = cartProduct[randomNumber];

    setRandomProduct(randomItem);

    document.getElementById("selectRandomProduct").style.display = "block";
  };

  // console.log("The random Product is:",randomProduct);

  return (
    <div id="cart-div" className="p-3 cart-product-selected-section">
      <div className="cart-calculation-section">
        <h3 className="text-center text-danger border border-dark">
          Cart Calculation
        </h3>

        {
           quantityValue == 0 ?   <div>
           {["warning"].map((variant) => (
             <Alert key={variant} variant={variant}>
                Please Add Something to Cart
             </Alert>
           ))}
         </div> :   <div>
            {["success"].map((variant) => (
              <Alert key={variant} variant={variant}>
                   Thank you for adding
              </Alert>
            ))}
          </div>
        }

        <h6>Selected Product:-{quantityValue}</h6>
        <h6>Total Price:-{sumOfTotalPrice}</h6>
        <h6>Total Shipping Cost:-{sumOfTotalShippingPrice}</h6>
        <h6>Tax:-{tax}</h6>
        <h6>Grand Total:-{grandTotal}</h6>
      </div>

      {quantityValue > 5 && (
        <div class="d-grid gap-2 mb-3">
          <button
            onClick={sleetedRandomProduct}
            class="btn btn-outline-success"
            type="button"
          >
            Choose 1 For Me
          </button>
        </div>
      )}

      <div id="selectRandomProduct">
        <div className="card mb-3 ">
          <div className="row g-0 card-div">
            <div className="col-md-4 col-6">
              <img src={img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 col-6">
              <div className="card-body card-body-div">
                <div className="selected-product-info">
                  <h3 className="text-size">{name}</h3>
                  <h6 className="text-size">Quantity{quantity}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {quantityValue > 5 && (
        <div class="d-grid gap-2 mb-3">
          <button
            onClick={sleetedRandomProduct}
            class="btn btn-outline-success"
            type="button"
          >
            Choose Again
          </button>
        </div>
      )}
      {props.children}
    </div>
  );
};

export default Cart;
