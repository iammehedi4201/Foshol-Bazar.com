import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './Carousel.css'

const CarouselSlider = () => {
  return (
    <div className="carousel-section mt-1">
           <Carousel className="carousel-size border" variant="dark">
      <Carousel.Item>
        <img
          className="d-block img-size"
          src="./img/Broccoli/gettyimages-79560960-612x612.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className="text-danger">Broccoli</h5>
          <p className="text-danger">Fresh Broccoli is Available In Our Foshol Bazar</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-size"
          src="./img/carot/gettyimages-92026520-612x612.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className="text-danger">Carot</h5>
          <p className="text-danger">Fresh Carot is Available In Our Foshol Baza</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-size"
          src="./img/Cauliflower/gettyimages-85636921-612x612.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className="text-danger">Cauliflower</h5>
          <p className="text-danger">
          Fresh Cauliflower is Available In Our Foshol Baza
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
   
  );
};

export default CarouselSlider;
