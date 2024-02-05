import React from "react";
import "./Carasoul.css";
import imgOne from "../../../assets/Images/carasoul-img/banana.png";
import imgTwo from "../../../assets/Images/carasoul-img/fruits-plate.png";
import imgThree from "../../../assets/Images/carasoul-img/plate-2.png";
import imgFour from "../../../assets/Images/carasoul-img/plate.png";

const Carasoul = () => {
  const carasoulButton = (
    <div className="flex justify-center w-full py-2 gap-2 absolute bottom-2 sm:bottom-5">
      <a
        href="#item1"
        className="btn shadow-2xl sm:w-20  btn-success hover:bg-green-400"
      >
        1
      </a>
      <a
        href="#item2"
        className="btn shadow-2xl sm:w-20  btn-success hover:bg-green-400"
      >
        2
      </a>
      <a
        href="#item3"
        className="btn shadow-2xl sm:w-20  btn-success hover:bg-green-400"
      >
        3
      </a>
    </div>
  );

  return (
    <div className="carousel w-full ">
      {/* carasoul item-1 */}
      <div id="item1" className="carousel-item w-full bg-[#ff736a] relative carasoul-style">
        <div className="max-w-screen-xl sm:min-h-screen sm:flex flex-row-reverse justify-center items-center mx-auto p-5 relative space-y-10 sm:space-y-0 ">
          <div className="sm:w-1/2 w-full relative">
            <img className=" sm:block w-54 h-56 sm:h-96 absolute bottom-0 -left-0 sm:-left-12 top-0 sm:top-[20%] rotate-180" src="https://amigos-themes.com/frutella/frutella-black/assets/images/content/x/strawberry-branch.png" alt="" />
            <img src={imgFour} className="sm:w-3/5 w-3/6 mx-auto" />
            <img className="w-54 h-56 sm:h-96 absolute bottom-0 -right-0 -top-0 sm:top-[30%]" src="https://amigos-themes.com/frutella/frutella-black/assets/images/content/x/strawberry-branch.png" alt="" />
            <img className=" w-20 h-20 absolute bottom-0 right-20 sm:right-52 -top-20" src="https://amigos-themes.com/frutella/frutella-black/assets/images/content/x/shpinat-2.png" alt="" />
          </div>
          <div className="space-y-5 w-full sm:w-1/2 sm:p-10 ">
            <h1 className="font-bold text-white text-5xl sm:text-6xl">
              Healthy Food
              <span className="text-[#98c869] font-bold"> Delivery</span>
            </h1>
            <h3 className="text-white text-lg font-medium italic capitalize">
              Product crafted with care
            </h3>
            <p className="text-white text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit debitis reprehenderit rem veniam numquam, incidunt facilis facere, laborum voluptate iusto sunt quisquam obcaecati, animi similique ad officiis praesentium dolor!
            </p>
            <button className="btn btn-neutral btn-wide">Shop</button>
          </div>

        </div>
        <div className="section-back-text">Fresh</div>
        {carasoulButton}
      </div>

      {/* carasoul item-2 */}
      <div id="item2" className="carousel-item w-full  bg-[#dfc13f] relative carasoul-style"
      >
        <div className="max-w-screen-xl sm:flex flex-row-reverse justify-center items-center sm:mx-auto p-5 relative space-y-5 sm:space-y-0 ">
          <div className="sm:w-1/2 w-full relative">
            <img className="w-16 h-16 absolute  left-0 -top-16 sm:top-0" src="https://amigos-themes.com/frutella/frutella-black/assets/images/content/x/bilberry.png" alt="" />
            <img src={imgTwo} className=" w-full mx-auto" />
          </div>
          <div className="space-y-5 w-full sm:w-1/2 sm:p-10">
            <h1 className="font-bold text-white text-5xl sm:text-6xl">
              Save on all Products
              <br />
              <span className="text-red-500 font-bold "> 45% OFF </span>
            </h1>
            <h3 className="text-white text-lg font-medium italic capitalize">
              Product crafted with care
            </h3>
            <p className="text-white text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque quas eum eveniet maiores temporibus quidem facere, facilis minima ipsam, perferendis natus rem laudantium modi autem itaque pariatur saepe blanditiis!
            </p>
            <button className="btn btn-neutral btn-wide">Shop</button>
          </div>

        </div>
        <div className="section-back-text">Organic</div>
        {carasoulButton}
      </div>
      {/* carasoul item-3 */}
      <div id="item3" className="carousel-item w-full bg-[#ff6a8e] relative carasoul-style" >
        <div className="max-w-screen-xl sm:flex flex-row-reverse justify-center items-center sm:mx-auto p-5 relative m-5 space-y-5 sm:space-y-0">
          <div className="sm:w-1/2 w-full relative">
            <img src={imgThree} className="sm:w-4/4 w-full mx-auto " />
          </div>
          <div className="space-y-5 w-full sm:w-1/2 sm:p-10">
            <h1 className="font-bold text-white text-5xl sm:text-6xl">
              Organic Food
              <span className="text-[#ffb524] font-bold"> Every Day </span>
            </h1>
            <h3 className="text-white text-lg font-medium italic capitalize">
              Product crafted with care
            </h3>
            <p className="text-white text-md leading-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam itaque soluta facere quo. Perferendis ex explicabo aut libero nobis enim atque veniam molestias ab ad aspernatur voluptas, quos cum labore!
            </p>
            <button className="btn btn-neutral btn-wide">Shop</button>
          </div>
        </div>
        {carasoulButton}
      </div>
    </div>
  );
};

export default Carasoul;
