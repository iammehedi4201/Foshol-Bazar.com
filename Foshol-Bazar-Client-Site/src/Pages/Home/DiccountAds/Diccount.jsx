import React from "react";
import logo from "../../../assets/logo-removebg-preview.png/";
import "./Diccount.css";

const Diccount = () => {
  return (
    <div className="bg-backound">
      <div className="flex items-center  max-w-screen-xl min-h-[60vh] mx-auto p-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <section  className="rounded-lg bg-gray-100">
            <img data-aos="fade-left"
              className="z-10 relative w-1/2 h-38 mx-auto"
              src={logo}
              alt=""
            />
          </section>
          <section data-aos="fade-right" className="z-10 relative space-y-3">
            <h3 className="text-orange-500 text-3xl font-bold ">
              Black Friday
            </h3>
            <h1 className="text-yellow-400 text-5xl font-bold ">
              SALE 50% OFF
            </h1>
            <p className="text-white text-sm font-bold ">
              All vegetable products
            </p>
          </section>
        </div>
      </div>
     
    </div>
  );
};

export default Diccount;
