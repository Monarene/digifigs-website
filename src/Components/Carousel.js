import React from "react";

import carousel_1 from "../assets/images/carousel_1.jpg";
import carousel_2 from "../assets/images/carousel_2.jpg";
import carousel_3 from "../assets/images/carousel_3.jpg";

import "../css/carousel.css";

export default function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide carousel-wrapper"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            className="d-block joenetflix"
            src={carousel_1}
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            className="d-block joenetflix"
            src={carousel_3}
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            className="d-block joenetflix"
            src={carousel_2}
            alt="First slide"
          />
        </div>
      </div>
      <ol class="carousel-indicators indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active indicator"
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="1"
          class="indicator"
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="2"
          class="indicator"
        ></li>
      </ol>
    </div>
  );
}
