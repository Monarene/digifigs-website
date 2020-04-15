import React from "react";
import AOS from "aos";
import TopCaption from "../Components/TopCaption";
import CaptionImage from "../Components/CaptionImage";
import Partners from "../Components/Partners";
import StandOut from "../Components/StandOut";
import "aos/dist/aos.css";
import "../css/homepage.css";

//TO-DO implement the jumbotron on all pages

const ServicePage = () => {
  AOS.init({ duration: 800 });
  return (
    <React.Fragment>
      <div data-aos="fade-down">
          <TopCaption title="Content Marketing" subtitle="" />
      </div>
    </React.Fragment>
  );
};

export default ServicePage;
