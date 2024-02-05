import React from "react";

const AboutUs = () => {
  return (
    <div >
      <section className="flex flex-col items-center bg-stone-100 xl:min-h-screen font-poppins dark:bg-[#1d1c22]  sm:p-10">
        <div data-aos="fade-right" className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <span className="text-md text-orange-600 font-semibold text-or uppercase">
                Who we are
              </span>
              <h2 className="mt-2 mb-6 text-2xl font-bold dark:text-gray-300">
                We are the large business expert in Europe and Asia
              </h2>
              <p className="mb-10 text-gray-600 dark:text-gray-400 text-justify ">
                Our mission is to bring our customers quality products, at the
                lowest price with the best service in the industry. That is why
                we are premier online marijuana dispensary! We offer our clients
                a user-friendly platform where you’re only a few clicks away
                from guaranteed delivery of the highest quality marijuana
                products right to your front door-step.
              </p>
              <button

                className="btn   btn-xl px-4 py-3 text-gray-900 uppercase transition-all transform bg-[#dfc13f] rounded  hover:bg-[#dfc13f] "
              >
                About Us
              </button>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="relative">
                <img
                  src="https://amigos-themes.com/frutella/frutella-black/assets/images/content/720x720/person-holding-red-ceramic-plate-with-food-4252139.jpg"
                  className="relative z-10 object-cover w-[90%] h-full rounded mx-auto"
                />
                <div className="absolute hidden w-full sm:w-[90%]  h-full bg-[#dfc13f] rounded -bottom-6 left-6 lg:block"></div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------- */}
        <div data-aos="fade-right" className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap-reverse">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="relative">
                <img
                  src="https://amigos-themes.com/frutella/frutella-black/assets/images/content/720x720/woman-in-white-and-black-striped-sweatshirt-holding-filled-923182.jpg"
                  className="relative z-10 object-cover w-[90%] h-full rounded mx-auto"
                />
                <div className="absolute hidden w-full sm:w-[90%] h-full bg-[#dfc13f] rounded -bottom-6 left-6 lg:block"></div>
              </div>
            </div>
            <div className="w-full px-10 my-10 lg:w-1/2 lg:mb-0 ">
              <span className="text-md text-orange-500 font-semibold text-or uppercase">
                Why choose us
              </span>
              <h2 className="mt-2 mb-6 text-2xl font-bold dark:text-gray-300">
                We are the large business expert in Europe and Asia
              </h2>
              <p className="mb-10 text-gray-600 dark:text-gray-400 text-justify">
                Our mission is to bring our customers quality products, at the
                lowest price with the best service in the industry. That is why
                we are premier online marijuana dispensary! We offer our clients
                a user-friendly platform where you’re only a few clicks away
                from guaranteed delivery of the highest quality marijuana
                products right to your front door-step.
              </p>
              <button

                className="btn   btn-xl px-4 py-3 text-gray-100 uppercase transition-all transform bg-[#dfc13f] rounded  hover:bg-[#dfc13f] "
              >
                About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
