import React from 'react'

import joe_netflix from "../assets/images/Joe _ Netflix.png";

import '../css/carousel.css';

export default function Carousel() {

  return (
    <div id="carouselExampleIndicators" class="carousel slide carousel-wrapper" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img className="d-block joenetflix" src={joe_netflix} alt="First slide" />
            </div>
            <div class="carousel-item">
                <img className="d-block joenetflix" src={joe_netflix} alt="First slide" />
            </div>
            <div class="carousel-item">
                <img className="d-block joenetflix" src={joe_netflix} alt="First slide" />
            </div>
        </div>
        <ol class="carousel-indicators indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active indicator"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1" class="indicator"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2" class="indicator"></li>
        </ol>
    </div>
  )
}
