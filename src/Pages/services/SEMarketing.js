import React from "react";
import TopCaption from "../../Components/TopCaption";
import Partners from "../../Components/Partners";
import StandOut from "../../Components/StandOut";
import Marketing from "../../Components/Marketing";
import Carousel from "../../Components/Carousel";
import { Button } from "reactstrap";
import "../../css/homepage.css";
import "../../css/services.css";
import people from "../../assets/images/SEM/Main.jpg";
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

const SEMarketing = (props) => {
  return (
    <React.Fragment>
      <div data-aos="fade-down">
        <TopCaption
          title="Search Engine Marketing"
          subtitle="Our methods are backed with in-depth research and precise strategy."
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
      <div data-aos="zoom-in">
        <Marketing caption="Art of Search Engine Marketing" />
      </div>
      <div className="container" data-aos="fade-down">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="content-container">
              <img src={content} className="contentImage" alt="content" />
              <h5 className="contentText">Keywords Research</h5>
              <h6 className="content-text">
                We will research alternative search terms that are commonly used
                when internet users make search queries related to your products
                and services. This will ensure that your ads pop up in the
                search engine results page when users make related searches
                online.
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
              <h5 className="contentText">Campaign Optimization</h5>
              <h6 className="content-text">
                We will help monitor and enhance the performance of your ads
                after launching. Through this process, your ad campaigns can be
                better optimised through strategic conversion goal-setting, ad
                extensions, and ad groups segmentation.
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
              <h5 className="contentText">Ads Copywriting</h5>
              <h6 className="content-text">
                We will write effective sales and ads copy guaranteed to
                generate leads and conversion. We understand what it takes to
                write advertising copy that compels people to click and take
                profitable action.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 grow-container">
            <h5 className="rejoice-text">
              Let's help you take your products and services where they are
              needed.
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

export default SEMarketing;
