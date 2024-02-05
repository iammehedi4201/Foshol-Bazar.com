import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ShopProducts from "../Pages/ShopPorducts/ShopProducts/ShopProducts";
import Checkout from "../Pages/Checkout/Checkout";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import AboutFosholBazar from "../Pages/AboutUs/AboutUs/AboutFosholBazar";
import ContactUs from "../Pages/ContactUS/ContactUs";
import AddProducts from "../Pages/Dashboard/Admin/AddProducts/AddProducts";
// import Exp from "../Pages/Expriments/Exp";
import MyProducts from "../Pages/MyProducts/MyProducts";
import PrivateRotes from "./PrivateRotes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/MyCart/Cart/Cart";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers/AllUsers";
import UserHome from "../Pages/Dashboard/User/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome/AdminHome";
import AdminRoute from "./AdminRoutes";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSucces/PaymentSuccess";
import PaymentFail from "../Pages/Dashboard/Payment/PaymentFail/PaymentFail";
import PaymentHistory from "../Pages/Dashboard/User/UserHome/PaymentHistory/PaymentHistory/PaymentHistory";
import AddReview from "../Pages/Dashboard/User/AddReview/AddReview/AddReview";
import AddReviewFrom from "../Pages/Dashboard/User/AddReview/AddReviewFrom/AddReviewFrom";
import OrderHistory from "../Pages/Dashboard/User/OrderHistory/OrderHistory/OrderHistory";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems/ManageItems/ManageItems";
import ManageOrders from "../Pages/Dashboard/Admin/ManageOrders/ManageOrders/ManageOrders";
import Exp from "../Pages/Expriments/Exp";
import Coupons from "../Pages/Dashboard/Admin/Coupons/Coupons/Coupons";
import CandidateForCoupons from "../Pages/Dashboard/Admin/Coupons/BestCandidateForCoupons/BestCandidateForCoupons/CandidateForCoupons";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "products",
        element: <ShopProducts></ShopProducts>,
        // loader: () => fetch("https://foshol-bazar.onrender.com/products"),
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "addproduct",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "myproducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "aboutus",
        element: <AboutFosholBazar></AboutFosholBazar>,
      },
      {
        path: "contractus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "test",
        element: <Exp></Exp>,
      },

    ],
  },
  {
    path: "dashboard",
    element: <PrivateRotes><Dashboard></Dashboard></PrivateRotes>,
    children: [
      //User Routes
      {
        path: "mycart",
        element: <Cart></Cart>
      },
      {
        path: "userhome",
        element: <UserHome></UserHome>
      },
      {
        path: "payment/success/:tran_Id",
        element: <PaymentSuccess></PaymentSuccess>
      },
      {
        path: "payment/fail/:tran_Id",
        element: <PaymentFail></PaymentFail>
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "addreview",
        element: <AddReview></AddReview>
      },
      {
        path: "addreview/:id",
        element: <AddReviewFrom></AddReviewFrom>
      },
      {
        path: "orderhistory",
        element: <OrderHistory></OrderHistory>
      },

      //Admin Routes 
      {
        path: "adminhome",
        element: <AdminRoute> <AdminHome></AdminHome></AdminRoute>
      },
      {
        path: "alluser",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: "addproducts",
        element: <AdminRoute><AddProducts></AddProducts></AdminRoute>
      },
      {
        path: "manageitems",
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: "manageorders",
        element: <AdminRoute><ManageOrders></ManageOrders></AdminRoute>
      },
      {
        path: "manageCoupons",
        element: <AdminRoute><Coupons></Coupons></AdminRoute>
      },
      {
        path: "couponsCandidates",
        element: <AdminRoute><CandidateForCoupons></CandidateForCoupons></AdminRoute>
      }
    ]
  }
]);
