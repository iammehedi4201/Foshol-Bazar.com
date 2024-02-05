import React, { useContext, useState } from "react";
import "./Product.css";
import OurProducts from "../../Home/OurProducts/OurProducts";
import Rating from "react-rating";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Product = ({ product, setSelectedProduct, setProductDetails }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { _id, name, img, price, rating, categories, description } = product;

  const handleBuyNowClick = (product) => {
    if (!user || !user.email) {
      Swal.fire({
        icon: "warning",
        title: "Login is Required",
        text: "Please First Login then Buy",
      }).then(() => {
        navigate("/login");
      });
      return;
    }
    setSelectedProduct(product);
  };

  const handleProductDetails = (product) => {
    setProductDetails(product);
  };

  return (

      <div data-aos="zoom-in" className="overflow-hidden bg-white rounded-lg shadow-md shadow-indigo-500 dark:bg-[#292830] ">
        <a href="#" className="relative block h-60 overflow-hidden">
          <img
            className="object-cover w-full h-full transition-all hover:scale-110"
            src={img}
            alt={name}
          />
        </a>
        <div className="relative z-20 p-8 -mt-14 ">
          <span className="inline-block px-4 py-2 mb-3 text-lg font-bold text-white bg-blue-500 rounded">
            <span className="text-xl font-extrabold mr-1">৳</span>
            {price}
          </span>
          <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
            {name}
          </h2>
          <h2 className="mb-2 text-sm font-bold text-black dark:text-white">
            {categories}
          </h2>
          <div className="flex gap-1 pb-5 mb-5 text-orange-400 border-b border-gray-300 dark:border-gray-600">
            {/* This is React Rating  */}
            <Rating
              readonly
              placeholderRating={rating}
              emptySymbol={
                <svg
                  className="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              }
              placeholderSymbol={
                <svg
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              }
              fullSymbol={
                <svg
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              }
            />
            {rating}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex">
              <label
                onClick={() => handleProductDetails(product)}
                htmlFor="my_modal_6"
                className="btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-orange-600"
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fillRule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <label
              onClick={() => handleBuyNowClick(product)}
              htmlFor="my_modal_7"
              className="btn"
            >
              Buy Now
            </label>
          </div>
        </div>
      </div>
  );
};

export default Product;
