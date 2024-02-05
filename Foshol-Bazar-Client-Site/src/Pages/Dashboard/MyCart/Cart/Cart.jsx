import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import CartRow from "../CartRow/CartRow";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useCart from "../../../../Hooks/useCart";
import addtocartImg from '../../../../assets/addToCart.png';
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const Cart = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    // console.log(user.email);
    const [loadedCartItems, isCartLoading, cartRefetch] = useCart();
    const [totalPrice, setTotalPrice] = useState("");
    const [selectedCartItemInfo, setSelectedCartItemInfo] = useState({});
    const [coupon, setCoupon] = useState("")
    const navigate = useNavigate()
    //After apply coupon the total Price 
    const [totalAmount, setTotalAmount] = useState(0)

    //total Calculation
    let sumOfTotal = 0;
    let shippingCharge = 50;
    for (const order of loadedCartItems) {
        sumOfTotal = sumOfTotal + order.productPrice * order.productQuantity;
    }   


    //handle Apply Coupon 
    const handleApplyCoupon = async () => {
        const couponNumber = parseInt(coupon.slice(6));
        const response = await axiosSecure.get(`/coupons?coupon=${coupon}`)
            .then(response => {
                if (response.data === 'Expiry date not over') {
                    const couponNumber = parseInt(coupon.slice(6));
                    setTotalAmount(sumOfTotal - couponNumber)
                }
                else {
                    toast.error(`Coupon ${response.data}`)
                }
            })
    }

    //handle Delete Order
    const handleDeleteCartItem = (id) => {
        fetch(`https://foshol-bazar.onrender.com/cart-items/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    toast.success("order Deleted Successfully");
                    cartRefetch();
                }
            })
            .catch((error) => console.error(error));
    };

    //handle Update OrderInfo
    //this function will take updated info form update from
    const hanldeUpdatedInfo = (e) => {
        e.preventDefault();
        const form = e.target;
        const productQuantity = form.quantity.value;
        const updatedCartItemQuantity = {
            productQuantity,
        };
        fetch(`https://foshol-bazar.onrender.com/cart-items/${selectedCartItemInfo._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedCartItemQuantity),
        })
            .then((res) => res.json())
            .then(async (data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Data updated Successfully");
                    await cartRefetch();
                    form.reset();
                }
            })
            .catch((error) => console.error(error));
    };

    //this function will send the updated info to backend
    const handleUpdateCartItemInfo = (order) => {
        setSelectedCartItemInfo(order);
    };


    // loading state :
    if (isCartLoading) {
        console.log("----------Is cart is loading -------");
        return <div className=" w-full min-h-screen flex items-center justify-center">
            <span className="loading loading-infinity loading-lg text-white"></span>
        </div>
    }

    return (
        <div>
            {/* Page Header  */}
            <section className="bg-cyan-500 relative bg-img">
                <div className="flex items-center justify-center max-w-screen-xl min-h-[40vh] mx-auto">
                    <section className="z-10 space-y-4">
                        <h1 className="text-white font-bold text-4xl">Foshol Bazar</h1>
                        <p className="text-white font-bold text-xl text-center">Home \ </p>
                    </section>
                </div>
                <div className="white-curve-after hidden sm:block"></div>
                <div className="section-back-text">Cart</div>
            </section>
            {/* ---------- */}
            <section className="bg-[#1d1c22]">
                <div className="flex items-center max-w-screen-xl min-h-[100vh] mx-auto sm:p-10">
                    <div>
                        <section className="flex items-center  xl:mi-h-screen font-poppins bg-[#1d1c22]">
                            <div className="justify-center flex-1 px-1 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
                                <h2 className="mb-10 text-4xl font-bold text-center dark:text-cyan-500">
                                    Your Cart
                                </h2>
                                <div className="flex flex-wrap ">
                                    <div className="w-full lg:w-8/12 shadow-inner shadow-cyan-500">
                                        {
                                            loadedCartItems.length == 0
                                                ?
                                                <div className="px-10">
                                                    <img className="object-cover sm:max-w-lg mx-auto w-full" src={addtocartImg} alt="" />
                                                    <h1 className="text-[#f97316] text-3xl font-bold text-center py-10 capitalize">Your Shopping bag is empty <br /> Start Shopping </h1>
                                                </div>
                                                :
                                                <div className="px-10">
                                                    {loadedCartItems.map((order) => (
                                                        <CartRow
                                                            key={order._id}
                                                            order={order}
                                                            handleDeleteCartItem={handleDeleteCartItem}
                                                            handleUpdateCartItemInfo={handleUpdateCartItemInfo}
                                                        ></CartRow>
                                                    ))}
                                                </div>
                                        }

                                    </div>
                                    <div className="w-full lg:w-4/12 shadow-md shadow-cyan-500">
                                        <div className="px-6 mb-14">
                                            <div className="mb-10">
                                                <span className="mb-6 text-3xl font-bold text-cyan-600 ">
                                                    Apply Coupon
                                                </span>
                                                <input
                                                    type="text"
                                                    onBlur={(e) => setCoupon(e.target.value)}
                                                    className="flex-1 w-full px-8 py-4 mt-4 font-normal placeholder-gray-400 border dark:bg-gray-800 rounded-xl dark:border-gray-700 dark:placeholder-gray-500 md:flex-none md:mr-6 dark:text-gray-400"
                                                    placeholder="x304k45"
                                                    required=""
                                                />
                                                <button
                                                    onClick={handleApplyCoupon}
                                                    className="inline-block w-full px-6 py-4 mt-4 text-lg font-medium leading-6 tracking-tighter text-center text-white bg-orange-500 lg:w-auto  focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                                                >
                                                    Apply
                                                </button>
                                            </div>
                                            <div>
                                                <h2 className="mb-6 text-3xl font-bold text-cyan-600">
                                                    Cart totals
                                                </h2>
                                                <div className="flex items-center justify-between px-10 py-4 mb-3 font-medium leading-8 bg-gray-100 bg-opacity-50 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
                                                    <span>Subtotal</span>
                                                    <span className="flex items-center text-xl">
                                                        <span className="text-xl font-extrabold mr-1">
                                                            ৳
                                                        </span>
                                                        <span>{totalAmount == 0 ? sumOfTotal : totalAmount}</span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between px-10 py-4 mb-3 font-medium leading-8 bg-gray-100 bg-opacity-50 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
                                                    <span>Shipping</span>
                                                    <span className="flex items-center text-xl">
                                                        <span className="text-xl font-extrabold mr-1">
                                                            ৳
                                                        </span>
                                                        <span>{shippingCharge}</span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between px-10 py-4 mb-6 font-medium leading-8 bg-gray-100 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
                                                    <span>Total</span>
                                                    <span className="flex items-center text-xl text-blue-500 dark:text-blue-400">
                                                        <span className="text-xl font-extrabold mr-1">
                                                            ৳
                                                        </span>
                                                        <span>{totalAmount == 0 ? sumOfTotal + shippingCharge : totalAmount + shippingCharge}</span>
                                                    </span>
                                                </div>
                                                <Link
                                                    to='/checkout'
                                                    state={totalAmount == 0 ? sumOfTotal + shippingCharge : totalAmount + shippingCharge}
                                                    className="inline-block w-full px-6 py-4 text-lg font-medium leading-6 tracking-tighter text-center text-white bg-orange-500 lg:w-auto focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                                                    href="#"
                                                >
                                                    Checkout
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            {/* update form  */}
            <input type="checkbox" id="my_modal_8" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box modal-box_For_Product_Details  shadow-md shadow-[#023d47]">
                    <div className="">
                        <section className="bg-[#1d1c22]">
                            <div className="flex items-center justify-center max-w-screen-sm  mx-auto p-5">
                                <div className="w-full">
                                    <div className="bg-gray-100 text-gray-500 shadow-2xl shadow-[#023d47] w-full overflow-hidden">
                                        <div className="w-full">
                                            <div className="w-full  py-10 px-5 md:px-10 bg-[#1d1c22] shadow-inner shadow-[#01291e]">
                                                <div className="text-center mb-10 space-y-2">
                                                    <h1 className="font-bold text-3xl text-emerald-700">
                                                        Update Product Info
                                                    </h1>
                                                    <p className=" text-sm font-semibold text-orange-300">
                                                        {selectedCartItemInfo.productName} Information
                                                    </p>
                                                </div>
                                                <div>
                                                    <form onSubmit={hanldeUpdatedInfo}>
                                                        <div className="flex flex-col sm:flex-row -mx-3">
                                                            <div className="w-full sm:w-full px-3 mb-5">
                                                                <label
                                                                    htmlFor=""
                                                                    className="text-md font-semibold px-1 text-white"
                                                                >
                                                                    Product Quantity
                                                                </label>
                                                                <div className="flex">
                                                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                                                    <input
                                                                        type="number"
                                                                        name="quantity"
                                                                        className="w-full text-gray-100  bg-gray-600  font-semibold -ml-10 mt-2 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-600 outline-none text-centerfocus:border-emerald-700"
                                                                        defaultValue={selectedCartItemInfo.productQuantity}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex -mx-3">
                                                            <div className="w-full px-3 mb-5">
                                                                <button
                                                                    type="submit"
                                                                    className="block w-full max-w-xs mx-auto bg-emerald-700 hover:bg-orange-700 focus:bg-orange-700 text-white rounded-lg px-3 py-3 font-semibold"
                                                                >
                                                                    <label htmlFor="my_modal_8" >
                                                                        Update PRODUCT Quantity
                                                                    </label>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
