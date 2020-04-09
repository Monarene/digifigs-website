import React from "react";
import Partners from '../Components/Partners';
import AOS from 'aos';
import down from "../assets/images/down.png";

import ballons from "../assets/images/ballons.png";
import new_image from "../assets/images/home-banner.png";
import capa from "../assets/images/Capa_1.png";
import target from "../assets/images/Target.png";
import arrow from "../assets/images/Arrow.png";
import heroshe from "../assets/images/heroshe.png";
import ContactForm from "../Components/ContactForm";
import TopCaption from "../Components/TopCaption";
import Marketing from "../Components/Marketing";
import CaptionImage from "../Components/CaptionImage";
import Carousel from "../Components/Carousel";
import Service from "../Components/Service";
import "../css/homepage.css";
import "aos/dist/aos.css";



const HomePage = () => {
  AOS.init({ duration: 800,});
  return (
    <div>
      <div data-aos="fade-up">
        <TopCaption />
      </div>
      
      <div data-aos="zoom-in">
        <CaptionImage image={new_image} />
      </div>
      <div className="container justify-content-center" data-aos="fade-down">
        <Partners />
      </div>
      <div className="standing2" height="444">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="standing" data-aos="flip-down">We stand out<br /> among the Crowd</h3>
            </div>
            <div className="col-sm-6">
              <img alt="" className="ballons" src={ballons} />
            </div>
          </div>
        </div>
        
      </div>
      <div data-aos="zoom-in">
        <Marketing />
      </div>
      
      <div className="container carousel-container" data-aos="fade-up">
        <Carousel />
      </div>
      <div className="container justify-content-center">
        <div className="row">
          <div className="col">
            <h3
              className="buildingText"
              style={{ marginTop: "30px", marginBottom: "40px" }}
            >
              Build your Business
            </h3>
          </div>
        </div>
        <div className="row engineO">
          <div className="col-sm-12 col-md-6" data-aos="fade-right">
            <Service imgClass="target" image={target} text1="Search Engine Optimization" text2="Get your website to rank higher on search engine results pages through the improved online visibility that we offer through our SEO services." />
          </div>
          <div className="col-sm-12 col-md-6" data-aos="fade-left">
            <Service imgClass="capa" image={capa} text1="Web Development" text2="We will help you build a website that shows the brand image you want your website visitors to see. We also provide quality services in web hosting." />
          </div>
        </div>
        <div className="row see-all-wrapper">
          <div>
            <a href="#"><button type="button" class="btn btn-link see-all">See all</button></a>
          </div>
          <div>
            <img src={down} alt=""/>
          </div>
        </div>
      </div>
      <div className="herosheContainer">
        <div className="container">
          <div className="row">
            <h6 className="casestudies">Case Studies</h6>
          </div>
          <div className="herosheContainer2">
            <div className="row heroshecontainer">
              <div className="col-sm-12 col-md-6 heroshecontainer2">
                <h3 className="herosheText1">
                  How we scaled Heroshe from 0 to 100
                </h3>
                <div className="partcontainer">
                  <h4 className="herosheText2">
                    Get your website to rank higher on search engine results
                  </h4>
                  <h4 className="herosheText3">
                    See how
                    <span>
                      <img
                        alt=""
                        src={arrow}
                        style={{
                          height: "15.25px",
                          width: "32px",
                          paddingLeft: "5px",
                          textTransform: " transform: scaleX(-1) scaleY(-1)",
                        }}
                      />
                    </span>
                  </h4>
                </div>
                <h3 className="herosheText4">heroshe</h3>
              </div>
              <div className="col-sm-12 col-md-6">
                <img src={heroshe} alt="" className="herosheImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <ContactForm />
      </div>
    </div>
  );
};

export default HomePage;
