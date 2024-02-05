import React from "react";
import './AboutUsFosholBazar.css'
import AboutUs from "../../Home/AboutUs/AboutUs";
import MoreAboutUs from "../MoreAboutUs/MoreAboutUs";
import OurTeams from "./OurTeams/OurTeams";

const AboutFosholBazar = () => {
  return (
    <div>
      {/* page header  */}
      <section>
        <section className="bg-green-700 relative bg-img">
          <div className="flex items-center justify-center max-w-screen-xl min-h-[40vh] mx-auto">
            <section className="z-10 space-y-4">
              <h1 className="text-white font-bold text-4xl">Foshol Bazar</h1>
              <p className="text-white font-bold text-xl text-center">
                Home \{" "}
              </p>
            </section>
          </div>
          <div className="white-curve-after"></div>
          <div className="section-back-text">About Us</div>
        </section>
      </section>
      {/* -------------- */}
      <AboutUs></AboutUs>
      <MoreAboutUs></MoreAboutUs>
      <OurTeams></OurTeams>
    </div>
  );
};

export default AboutFosholBazar;
