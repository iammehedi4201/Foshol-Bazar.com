import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import useCart from "../Hooks/useCart";
import useProduct from "../Hooks/useProduct";
import {
  addToDb,
  deleteAProductFormDb,
} from "../LocalStorage/Database";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = (props) => {
  const { value } = props;



  // console.log("The value is:",value);

  const [products, setProducts] = useProduct(); //Load data from product.json file

  

  // const [cartProduct, setCartProducts] = useState([]);

  const [cartProduct,setCartProducts]=useCart(products)//load cart stored data

  const selectedProduct = products.filter((product) => product.name === value);

  const navigator =useNavigate();


  const orderReview=()=>{

     const path ='/Order';

     navigator(path)

  }

  // useEffect(() => {
  //   const storedCartItem = storedCart();

  

  //   let cartUpdate = [];

  //   for (const product in storedCartItem) {
  //     const getProduct = products.find((item) => item.id === product);

  //     if (getProduct) {
  //       const quntaity = storedCartItem[product];

  //       getProduct.quantity = quntaity;

  //       cartUpdate.push(getProduct);
  //     }
  //   }

  //   setCartProducts(cartUpdate);
  // }, [products]);

  const addToCart = (productDetails) => {
    // if (cartProduct.includes(productDetails)) {

    //      alert("It's already in cart ")

    // }

    // else{

    //     const newCartProduct =[...cartProduct,productDetails];

    //     setCartProducts(newCartProduct);

    // }
    let newCartProduct = [];

    const checkProductExistense = cartProduct.find(
      (item) => item.id === productDetails.id
    );

    if (!checkProductExistense) {
      productDetails.quantity = 1;

      newCartProduct = [...cartProduct, productDetails];
    } else {
      const rest = cartProduct.filter((item) => item.id !== productDetails.id);

      productDetails.quantity = productDetails.quantity + 1;

      newCartProduct = [...rest, productDetails];
    }

    setCartProducts(newCartProduct);

    addToDb(productDetails.id);

    // document.getElementById("cart-div").style.display="block"
  };

  //Delete a Product form cart

  const deleteAProduct = (productId) => {
    const restCartItem = cartProduct.filter((item) => item.id !== productId);

    if (restCartItem) {
      setCartProducts(restCartItem);

      deleteAProductFormDb(productId);
    }
  };

  // console.log("The cart product is:",cartProduct);

  //   console.log("The selected Product is:", selectedProduct);

  return (
    <div className="shop-section">
      <div className="product-section row row-cols-1 row-cols-md-3 g-4">
        {selectedProduct.map((item) => (
          <Product item={item} key={item.id} addToCart={addToCart}></Product>
        ))}
      </div>

      <div className="cart-section">
        <Cart cartProduct={cartProduct} >
              <div class="d-grid gap-2 mb-3">
              <button
                class="btn btn-outline-danger"
                type="button"
              >
                 Clear Cart
              </button>
            </div>
            <div class="d-grid gap-2 mb-3">
              <button onClick={orderReview}
                class="btn btn-outline-danger"
                type="button"
              >
                 Order Review
              </button>
            </div>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
