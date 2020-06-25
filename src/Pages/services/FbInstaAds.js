import React from "react";
import TopCaption from "../../Components/TopCaption";
import Partners from "../../Components/Partners";
import StandOut from "../../Components/StandOut";
import Marketing from "../../Components/Marketing";
import Carousel from "../../Components/Carousel";
import { Button } from "reactstrap";
import "../../css/homepage.css";
import "../../css/services.css";
import people from "../../assets/images/FB and IG ads/3.jpg";
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

const FbInstaAds = (props) => {
  return (
    <React.Fragment>
      <div data-aos="fade-down">
        <TopCaption
          title="Facebook &amp; Instagram Ads"
          subtitle="Sell to your customers right in their comfort zones."
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
        <Marketing caption="Art of Content Marketing" />
      </div>
      <div className="container" data-aos="fade-down">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="content-container">
              <img src={content} className="contentImage" alt="content" />
              <h5 className="contentText">Objective-based ad campaigns</h5>
              <h6 className="content-text">
                Launch adverts that speak to the end-goal that you have in mind.
                Be it brand awareness, increased reach or lead generation,
                Facebook ads offer a range of 11 objectives that sum up
                different business growth needs.
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
              <h5 className="contentText">
                Performance tracking and optimization
              </h5>
              <h6 className="content-text">
                This feature helps to ensure that you can monitor how well your
                primary campaigns perform in the Facebook Ads Manager dashboard.
                Otherwise, you can divert your budget into other more effective
                alternatives that are best suited to deliver the expected
                results.
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
              <h5 className="contentText">Audience-targeted ads</h5>
              <h6 className="content-text">
                With Facebook and Instagram ads, you can choose your audience on
                several criteria so that your ad reaches the most valuable
                potential customers.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 grow-container">
            <h5 className="rejoice-text">
              Let's help you reach your exact audience through novel advertising
              strategies on social media platforms.
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
      <div className="container content-container" data-aos="fade-up">
        <div className="row">
          <div className="col-sm-6 col-md-6 girl-dog-container">
            <img src={girl_dog} alt="A girl and a dog" className="girl-dog" />
          </div>
          <div
            className="col-sm-6 col-md-6 customer-container"
            style={{ paddingLeft: "20px" }}
          >
            <h4 className="customer-text">
              With micro-targeting features that allow you to reach your exact
              target audience, Facebook and IG ads take your message right to
              the people who are most likely to want your products or services.{" "}
            </h4>
            <a href="/contact">
              <Button
                color="primary"
                className="text-white button-dog"
                style={{ marginTop: "30px" }}
              >
                {" "}
                Get started
              </Button>
            </a>
          </div>
        </div>
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

export default FbInstaAds;
