import React from "react";
import Carasoul from "../Carasoul/Carasoul";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import AboutUs from "../AboutUs/AboutUs";
import ProductsType from "../ProductsType/ProductsType";
import Stats from "../Stats/Stats";
import FruitesAds from "./FruitesAds/FruitesAds";
import OurProducts from "../OurProducts/OurProducts";
import Shipping from "../Shipping/Shipping";
import Diccount from "../DiccountAds/Diccount";
import CutomerReviews from "../CutomerReviews/CutomerReviews";
import Newsletter from "../Newsletter/Newsletter";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="min-h-screen pt-28 ">
      <Carasoul></Carasoul>
      <AboutUs></AboutUs>
      <ProductsType></ProductsType>
      <FeaturedProducts></FeaturedProducts>
      <Stats></Stats>
      <FruitesAds></FruitesAds>
      <OurProducts></OurProducts>
      <Shipping></Shipping>
      <Diccount></Diccount>
      <CutomerReviews></CutomerReviews>
      <Newsletter></Newsletter>
      <Contact></Contact>
    </div>
  );
};

export default Home;
