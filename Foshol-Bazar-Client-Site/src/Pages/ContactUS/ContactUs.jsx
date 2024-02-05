import React from "react";
import Contact from "../Home/Contact/Contact";

const ContactUs = () => {
  return (
    <div>
      {/* page header  */}
      <section className="bg-[#111827] relative s ">
        <div className="w-[90%] flex mx-auto shadow-md shadow-yellow-500">
        <div className="flex items-center justify-center max-w-screen-xl min-h-[40vh] mx-auto">
          <section className="z-10 space-y-4">
            <h1 className="text-white font-bold text-4xl">Foshol Bazar</h1>
            <p className="text-white font-bold text-xl text-center">Home \ </p>
          </section>
        </div>
        <div className="section-back-text">Contract Us </div>
        </div>
       
      </section>
      {/* ------------- */}
      <Contact></Contact>
    </div>
  );
};

export default ContactUs;
