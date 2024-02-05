import React from "react";
import leaf from "../../../../assets/Icons/leaf-svgrepo-com (1).svg";

const FruitesAds = () => {
  return (
    <div className="bg-[#1d1c22]">
      <div className="flex items-center max-w-screen-xl min-h-[100vh] mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div  data-aos="fade-right" className="rounded-lg bg-[#1d1c22] shadow-md shadow-orange-400 p-5">
            <img
              className="w-5/6"
              src="https://amigos-themes.com/frutella/frutella-black/assets/images/content/x/orange-juice.png"
              alt=""
            />
          </div>
          <div  data-aos="fade-right" className="rounded-lg bg-[#1d1c22] space-y-5 shadow-md shadow-orange-400 p-5">
            <h2 className="text-[#ffb524] font-bold text-4xl">
              Fresh Orange Jusice
            </h2>
            <h1 className="font-bold text-5xl text-white">100% Organic</h1>
            <div className="space-y-8">
              <p className="text-white flex text-sm">
                <span>
                  <img className="w-9 h-9" src={leaf} alt="" />
                </span>{" "}
                Frutella 100 percent Orange Juice is the perfect beverage to
                pack in lunches or drink on the go
              </p>
              <p className="text-white flex text-sm">
                <span>
                  <img className="w-9 h-9" src={leaf} alt="" />
                </span>{" "}
                Frutella 100 percent Orange Juice is the perfect beverage to
                pack in lunches or drink on the go
              </p>
              <p className="text-white flex text-sm">
                <span>
                  <img className="w-9 h-9" src={leaf} alt="" />
                </span>{" "}
                Frutella 100 percent Orange Juice is the perfect beverage to
                pack in lunches or drink on the go
              </p>
              <p className="text-white flex text-sm">
                <span>
                  <img className="w-9 h-9" src={leaf} alt="" />
                </span>{" "}
                Frutella 100 percent Orange Juice is the perfect beverage to
                pack in lunches or drink on the go
              </p>

              <div className="sm:space-x-5">
                <a
                  className="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 transition hover:scale-110 "
                  href="/download"
                >
                  <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                    Add To Cart 
                  </span>
                </a>
                <a
                  className="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 transition hover:scale-110 "
                  href="/download"
                >
                  <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                    show more
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitesAds;
