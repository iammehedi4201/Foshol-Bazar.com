import React from "react";
import Cart from "../Cart/Cart";
import useCart from "../Hooks/useCart";
import useProduct from "../Hooks/useProduct";
import SelectedProduct from "../Inner cart/SelectedProduct";
import { deleteAProductFormDb } from "../LocalStorage/Database";
import Product from "../Product/Product";
import "./Order.css";

const Order = () => {
  const [products, setProducts] = useProduct();

  const [cartProduct, setCartProducts] = useCart(products);

  const deleteAProduct = (ProductId) => {
    const restCartItem = cartProduct.filter((item) => item.id !== ProductId);

    setCartProducts(restCartItem);

    deleteAProductFormDb(ProductId);
  };

  return (
    <div>
      <div className="order-review-container">
        <section className="selected-product-section">
          <h3 className="text-center text-danger border border-dark mt-2">
            Selected Vegetable
          </h3>
          {cartProduct.map((item) => (
            <SelectedProduct
              item={item}
              key={item.id}
              deleteAProduct={deleteAProduct}
            ></SelectedProduct>
          ))}
        </section>

        <section className="Cart-section">
          <Cart cartProduct={cartProduct}>
          <div class="d-grid gap-2 mb-3">
              <button class="btn btn-outline-danger" type="button">
                Clear Cart
              </button>
            </div>
            <div class="d-grid gap-2 mb-3">
              <button class="btn btn-outline-danger" type="button">
                Procced Checkout
              </button>
            </div>
          </Cart>
        </section>
      </div>
    </div>
  );
};

export default Order;
