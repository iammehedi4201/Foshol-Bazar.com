import React, { useState } from "react";
const CartRow = ({ order, handleUpdateCartItemInfo, handleDeleteCartItem, isCartLoading }) => {
  
  const {
    userName,
    userEmail,
    _id,
    productName,
    productImg,
    productPrice,
    productRating,
    productCategories,
    productDescription,
    productQuantity,
  } = order;


  // loading state :
  if (isCartLoading) {
    console.log("cart loading is called");
    return <div className=" w-full min-h-screen flex items-center justify-center">
      <span className="loader"></span>
    </div>
  }

  return (
    <div>
      <div className="relative flex flex-wrap items-center pb-8 my-8 -mx-4 border-b border-gray-200 dark:border-gray-700 xl:justify-between border-opacity-40 shadow-inner shadow-cyan-700">
        <div className="w-full mb-2 lg:mb-0 h-96 md:h-44 md:w-44">
          <img src={productImg} alt="" className="object-cover w-full h-full p-2" />
        </div>
        <div className="w-full px-4 mb-6 md:w-auto xl:mb-0">
          <a
            className="block mb-5 text-xl font-medium dark:text-gray-400 hover:underline"
            href="#"
          >
            {productName}
          </a>
          <div className="flex flex-wrap">
            <p className="mr-4 text-sm font-medium">
              {/* <span className="dark:text-gray-400">Catago:</span> */}
              <span className="ml-1 text-gray-400 dark:text-gray-400">
                {productCategories[0]}
              </span>
            </p>
            {/* <p className="text-sm font-medium dark:text-gray-400">
              <span>Size:</span>
              <span className="ml-2 text-gray-400">38</span>
            </p> */}
          </div>
        </div>
        <div className="w-full px-4 mt-6 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
          <div className="flex items-center">
            <h4 className="mr-4 font-medium dark:text-gray-400">Qty:</h4>
            <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 ">
              {/* <button className="py-2 pr-2 border-r border-gray-300 dark:border-gray-600 dark:text-white hover:text-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-dash"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                </svg>
              </button> */}
              <input
                type="number"
                className="w-12 px-2 py-4 text-center border-0 rounded-md dark:bg-gray-800 bg-gray-50 dark:text-gray-400 md:text-center"
                placeholder="1"
                value={productQuantity}
              />
              {/* <button className="py-2 pl-2 border-l border-gray-300 dark:border-gray-600 dark:text-white hover:text-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                </svg>
              </button> */}
            </div>
          </div>
        </div>
        <div className="w-full px-4 xl:w-auto">
          <span className="text-xl font-medium text-blue-500 dark:text-gray-400 ">
            <span className="text-xl font-extrabold mr-1">৳</span>
            <span>{productPrice * productQuantity}</span>
          </span>
        </div>

        <label
          htmlFor="my_modal_8"
          onClick={() => handleUpdateCartItemInfo(order)}
          className="cursor-pointer hidden sm:block absolute top-0 right-8 text-gray-300 lg:mt-6 lg:-mr-4 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="16"
            height="16"
            className="w-7 h-7 bi bi-x-circle text-orange-600"
          >
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
          </svg>
        </label>
        <button
          onClick={() => handleDeleteCartItem(_id)}
          className=" hidden sm:block absolute top-0 right-20 text-gray-300 lg:mt-6 lg:-mr-4 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="w-7 h-7 bi bi-x-circle text-red-600"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>

        <button className="mx-auto lg:hidden m-5 btn-wide btn btn-outline btn-error">
          Remove
        </button>
        <button className="mx-auto lg:hidden m-5 btn-wide btn btn-outline btn-error">
          Edit Info
        </button>
      </div>
    </div>
  );
};

export default CartRow;
