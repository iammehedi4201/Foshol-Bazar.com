import React, { useContext, useEffect, useState } from "react";
import "./Checkout.css";
import pathaoLogo from "../../assets/Images/Delivery_Icon/pathao-seeklogo.com.svg";
import uberLogo from "../../assets/Images/Delivery_Icon/Uber_logo_2018.svg";
import { AuthContext } from "../../Providers/AuthProvider";
import CheckoutProductRow from "./CheckoutProductRow/CheckoutProductRow";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [loadedCartItems, setLoadedCartItems] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState("pathao"); //for delivery choose
  const location = useLocation();
  let shippingCharge = 50;
  console.log("The total Amount is :-", location.state);

  const modifiedCartItems = [];

  // const order={
  //     order:modifiedCartItems
  // }
  // console.log(order);

  for (const item of loadedCartItems) {
    const { _id, userName, userEmail, productCategories, productDescription, productRating, ...rest } = item;
    modifiedCartItems.push(rest);
  }

  //handle select Delivey method
  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  //loading carts item
  useEffect(() => {
    fetch(`https://foshol-bazar.onrender.com/cart-items?email=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("bazar-access-token")}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setLoadedCartItems(data);
      })
      .catch((error) => console.error(error));
  }, [user.email]);




  //handle orderInfo
  const hanldeOrderInfo = async (e) => {
    e.preventDefault();
    const form = e.target;
    const address = form.address.value;
    const city = form.city.value;
    const phoneNumber = form.phoneNumber.value;
    const date = form.date.value;
    const paymentMethod = form.paymentMethod.value;
    const orderInfo = {
      customerName: user.displayName,
      customerEmail: user.email,
      customerImg: user?.photoURL,
      phoneNumber,
      shippingAddress: {
        address,
        city
      },
      date,
      paymentMethod,
      deilveryMethod: selectedMethod,
      orderItems: modifiedCartItems,
      cartItemId: loadedCartItems.map(item => item._id),
      totalPrice: location.state
    };

    const response = await axiosSecure.post('/orders', orderInfo)
      .then(response => {
        window.location.replace(response.data.url)
      })


  };

  return (
    <div>
      {/* page header  */}
      <section className="bg-green-700 relative bg-img">
        <div className="flex items-center justify-center max-w-screen-xl min-h-[40vh] mx-auto">
          <section className="z-10 space-y-4">
            <h1 className="text-white font-bold text-4xl">Foshol Bazar</h1>
            <p className="text-white font-bold text-xl text-center">Home \ </p>
          </section>
        </div>
        <div className="white-curve-after hidden sm:block"></div>
        <div className="section-back-text">Checkout</div>
      </section>
      {/* ------------- */}
      <section className="bg-[#1d1c22]">
        <div className="max-w-screen-2xl min-h-[100vh] mx-auto sm:p-5">
          <div className="pt-[80px]">
            {/* Order summary part */}
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 pt-2  sm:p-10 ">
              <div className="p-10 pt-8 bg-[#1d1c22] rounded-l-lg h-auto shadow-inner shadow-green-500">
                <p className="text-xl font-bold text-teal-500 ">
                  Order Summary
                </p>
                <p className="text-white">
                  Check your items. And select a suitable shipping method.
                </p>
                {loadedCartItems.map((item) => (
                  <CheckoutProductRow
                    key={item._id}
                    item={item}
                  ></CheckoutProductRow>
                ))}

                {/* Shipping  part  */}

                <p className="mt-8 text-lg font-bold text-teal-500 ">
                  Shipping Methods
                </p>
                <form className="mt-5 grid gap-6">
                  <div className="relative text-black">
                    <input
                      className="peer hidden"
                      id="radio_1"
                      type="radio"
                      name="radio"
                      value="pathao"
                      checked={selectedMethod === "pathao"}
                      onChange={handleMethodChange}
                    />
                    <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="peer-checked:border-2 peer-checked:border-red-400 peer-checked:bg-orange-200 bg-white flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                      htmlFor="radio_1"
                    >
                      <img
                        className="w-14 object-contain"
                        src={pathaoLogo}
                        alt=""
                      />
                      <div className="ml-5">
                        <span className="mt-2 font-semibold">
                          Pathao Delivery
                        </span>
                        <p className="text-slate-900 font-medium text-sm leading-6">
                          Delivery: 2-4 Days
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="relative text-black">
                    <input
                      className="peer hidden"
                      id="radio_2"
                      type="radio"
                      name="radio"
                      value="uber"
                      checked={selectedMethod === "uber"}
                      onChange={handleMethodChange}
                    />
                    <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="peer-checked:border-2 peer-checked:border-indigo-800 peer-checked:bg-orange-200 bg-white flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                      htmlFor="radio_2"
                    >
                      <img
                        className="w-14 object-contain"
                        src={uberLogo}
                        alt=""
                      />
                      <div className="ml-5">
                        <span className="mt-2 font-semibold">
                          Uber Delivery
                        </span>
                        <p className="text-slate-900 font-medium text-sm leading-6">
                          Delivery: 2-4 Days
                        </p>
                      </div>
                    </label>
                  </div>
                </form>
              </div>

              {/* Payment part  */}

              <form onSubmit={hanldeOrderInfo}>
                <div className="mt-10 bg-[#1d1c22] p-8 pt-8 lg:mt-0 text-black rounded-r-lg  shadow-md shadow-green-500">
                  <p className="text-xl text-teal-500  font-medium">
                    Payment Details
                  </p>
                  <p className="text-white">
                    Complete your order by providing your payment details.
                  </p>
                  <div>
                    <label
                      htmlFor="address"
                      className="mt-4 mb-2 block text-white text-lg font-medium tex"
                    >
                      Address
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="w-full bg-white text-black font-semibold rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="khilgoan bashobo-175/6"
                      />
                    </div>

                    <div className="relative flex flex-col sm:gap-5 sm:flex-row">
                      <div className="sm:w-1/2 w-full">
                        <label
                          htmlFor="city"
                          className="mt-4 mb-2 block text-lg font-medium text-white"
                        >
                          city
                        </label>
                        <input
                          type="text"
                          name="city"
                          className="w-full bg-white  text-black font-semibold rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Enter City name "
                        />
                      </div>

                      <div className="sm:w-1/2 w-full ">
                        <label
                          htmlFor="city"
                          className="mt-4 mb-2  block text-lg font-medium text-white"
                        >
                          Payment method
                        </label>
                        <select
                          name="paymentMethod"
                          className="select select-accent   w-full"
                        >
                          <option value={"Bikash"}>Bikash</option>
                          <option value={"Nogod"}>Nogod</option>
                        </select>
                      </div>
                    </div>

                    <div className=" sm:flex sm:justify-between">
                      <div className="relative sm:w-2/3 ">
                        <label
                          htmlFor="card-no"
                          className="mt-4 mb-2 block text-lg  font-medium text-white"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          id="phoneNumber"
                          name="phoneNumber"
                          className="w-full text-black font-semibold bg-white rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Your phone Number"
                        />
                      </div>

                      <div className="">
                        <label
                          htmlFor="card-no"
                          className="mt-4 mb-2 block text-lg font-medium text-white"
                        >
                          Data
                        </label>
                        <input
                          type="date"
                          name="date"
                          className="w-full  text-black font-semiboldrounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="MM/YY"
                        />
                      </div>
                    </div>

                    {/* <!-- Total --> */}

                    <div className="mt-6 border-t border-b py-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-white">
                          Subtotal
                        </p>
                        <p className="font-semibold text-white">${location.state}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-white">
                          Shipping
                        </p>
                        <p className="font-semibold text-white">${shippingCharge}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-sm font-medium text-white">Total</p>
                      <p className="text-2xl font-semibold text-white">
                        ${location.state}
                      </p>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-4 mb-8 w-full rounded-md bg-[#FF3811] px-6 py-3 font-medium text-white"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
