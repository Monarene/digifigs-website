import React from "react";
import AOS from "aos";
import TopCaption from "../../Components/TopCaption";
import Partners from "../../Components/Partners";
import StandOut from "../../Components/StandOut";
import Marketing from "../../Components/Marketing";
import Carousel from "../../Components/Carousel";
import { Button } from "reactstrap";
import "aos/dist/aos.css";
import "../../css/homepage.css";
import "../../css/services.css";
import people from "../../assets/images/Google search ads/4.jpg";
import content from "../../assets/images/content_marketing.png";
import developement from "../../assets/images/content_development.png";
import copywriting from "../../assets/images/copywriting.png";
import people_black from "../../assets/images/people_black.png";
import girl_dog from "../../assets/images/girl_and_dog.png";
import arrow from "../../assets/images/Arrow.png";
import heroshe from "../../assets/images/heroshe.png";
import heroshe_mb from "../../assets/images/heroshe-mb.png";
import heroshe_text from "../../assets/images/heroshe-text.png";
import see_how from "../../assets/images/cta.png";

import ContactForm from "../../Components/ContactForm";

//TO-DO implement the jumbotron on all pages

const GoogleSearchAds = (props) => {
  AOS.init({ duration: 800 });
  return (
    <React.Fragment>
      <div data-aos="fade-down">
        <TopCaption
          title="Google Search Ads"
          subtitle="Leverage on Google Search Ads to reach new audiences."
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
              <h5 className="contentText">Keyword Planner</h5>
              <h6 className="content-text">
              With this Google Ads feature, we will research and curate data such as commonly used keywords and ad groups, average monthly searches, and bidding rates.  With this information about the search queries that users have submitted in the Google search engine, we will plan and build your own unique ad campaigns.
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
              <h5 className="contentText">Google Ad Extensions</h5>
              <h6 className="content-text">
              We will set your ads up for optimal visibility, best-rate performance and increased clicks using the Google Ads Extension service which allows advertisers to show extra information in ads including a business address, phone number, or web page links.
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
              <h5 className="contentText">Google Ads Re-targeting</h5>
              <h6 className="content-text">
              We will help you advertise to old website visitors who previously visited your website but have not yet taken profitable action to possibly  convert them.  We will adopt the dynamic re-marketing model to customize ads for these users based on the specific searches they previously made on your website.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 grow-container">
            <h5 className="rejoice-text">
            Let's help boost sales and conversion rates with targeted ads that connect you to potential customers.
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
              href="#get-started"
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
            Our service effectively drives qualified traffic to your business while they're searching for products and services similar to your brand’s offerings.{" "}
            </h4>
            <a href="#get-started">
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

export default GoogleSearchAds;
