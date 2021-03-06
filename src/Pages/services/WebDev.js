import React from "react";
import TopCaption from "../../Components/TopCaption";
import Partners from "../../Components/Partners";
import StandOut from "../../Components/StandOut";
import Marketing from "../../Components/Marketing";
import Carousel from "../../Components/Carousel";
import { Button } from "reactstrap";
import "../../css/homepage.css";
import "../../css/services.css";
import people from "../../assets/images/Web dev/4.jpg";
import content from "../../assets/images/content_marketing.png";
import developement from "../../assets/images/content_development.png";
import copywriting from "../../assets/images/copywriting.png";
import people_black from "../../assets/images/people_black.png";
import girl_dog from "../../assets/images/girl_and_dog.jpg";
import arrow from "../../assets/images/Arrow.png";
import heroshe from "../../assets/images/heroshe.jpg";
import heroshe_mb from "../../assets/images/heroshe-mb.jpg";
import heroshe_text from "../../assets/images/heroshe-text.png";
import see_how from "../../assets/images/cta.png";

import ContactForm from "../../Components/ContactForm";

//TO-DO implement the jumbotron on all pages

const WebDev = (props) => {
  return (
    <React.Fragment>
      <div data-aos="fade-down">
        <TopCaption
          title="Web Development"
          subtitle="Simplify complex user-needs through our progressive web apps services."
        />
      </div>
      <div className="container justify-content-center">
        <div className="row">
          <img alt="" src={people} className="image1" data-aos="zoom-in" />
        </div>
      </div>
      <div
        className="container justify-content-center partners-lg"
        data-aos="fade-down"
      >
        <Partners />
      </div>
      {/* <div data-aos="zoom-in">
        <Marketing caption="Art of Content Marketing" />
      </div> */}

      <div className="container" data-aos="fade-down">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="content-container">
              <img src={content} className="contentImage" alt="content" />
              <h5 className="contentText">Web Design</h5>
              <h6 className="content-text">
                We will create a website with a strategy that pays attention to
                detail for all important elements for a well-laid out website.
              </h6>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="content-container">
              <img
                src={developement}
                className="contentImage"
                alt="marketing"
              />
              <h5 className="contentText">Web Hosting</h5>
              <h6 className="content-text">
                We will help procure appropriate web hosting services for your
                brand to register its presence online and store the information
                that you want your visitors to see on your website.
              </h6>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="content-container">
              <img
                src={copywriting}
                className="contentImage"
                alt="copywriting"
              />
              <h5 className="contentText">Web Development</h5>
              <h6 className="content-text">
                Whether it’s building web content, developing a basic website
                page, or developing a complex web app, our team of developers
                bring web design to life using HTML, CSS, Javascript, PHP and
                other programming languages.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 grow-container">
            <h5 className="rejoice-text">
              Let's help you innovate and create web solutions that offer your
              customers a delightful user-experience.
            </h5>
          </div>
          <div className="col-sm-12 col-md-6">
            <img
              src={people_black}
              alt="People rejoicing"
              className="image-rejoicing"
            />
          </div>
          <div
            className="col-12"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Button
              color="primary"
              className="text-white justify-content-center rejoicing-button"
              href="/contact"
              style={{ margin: "auto" }}
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
      <div
        className="standing2"
        height="444"
        style={{ marginTop: "90px" }}
        data-aos="fade-down"
      >
        <StandOut />
      </div>
      <div className="container carousel-container" data-aos="zoom-in">
        <Carousel />
      </div>
      <div className="herosheContainer" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <h6 className="casestudies">Case Studies</h6>
          </div>
          <div className="row heroshe-wrapper">
            <div className="col-sm-12 col-md-auto heroshecontainer2">
              <h3 className="herosheText1">
                How we scaled Heroshe
                <br /> from 0 to 100
              </h3>
              <div className="partcontainer">
                <h4 className="herosheText2">
                  Get your website to rank higher on search engine results
                </h4>
                <h4 className="herosheText3">
                    <a href="/casestudies">See how</a>
                </h4>
              </div>
              <img src={heroshe_text} alt="" className="herosheText4" />
            </div>
            <div className="col-sm-12 col-md-auto">
              <img src={heroshe} alt="" className="herosheImage" />
              <img src={heroshe_mb} alt="" className="herosheImage-mb" />
            </div>
            <div className="see-how-wrapper">
              <img src={see_how} alt="" className="see-how" />
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <ContactForm resetForm={props.resetMessageForm} />
      </div>
    </React.Fragment>
  );
};

export default WebDev;
