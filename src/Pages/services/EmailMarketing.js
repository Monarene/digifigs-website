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
import people from "../../assets/images/email marketing/3.jpg";
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

const EmailMarketing = (props) => {
  AOS.init({ duration: 800 });
  return (
    <React.Fragment>
      <div data-aos="fade-down">
        <TopCaption
          title="Email Marketing"
          subtitle=" Pitch your products,  keep your customers and updated."
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
              <h5 className="contentText">Email Copywriting</h5>
              <h6 className="content-text">
              Let’s make your emails effective with copywriting that accurately expresses and delivers the intended idea you’re looking to publicize.
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
              <h5 className="contentText">Email Design</h5>
              <h6 className="content-text">
              Our content and design team will work together to build engaging yet responsive and appealing emails optimized for diverse devices.
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
              <h5 className="contentText">Email Drip Campaigns</h5>
              <h6 className="content-text">
              We will launch a coordinated and automated set of emails released based on specific timelines or user actions. Leveraging on this automation feature that functions by ‘triggers’ using marketing automation, your brand will enjoy increased and efficient engagement as against standard email campaigns. ​
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 grow-container">
            <h5 className="rejoice-text">
            Let's help you maintain correspondence and engage with your audience in the most appealing way.
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
            We will create email marketing campaigns to engage your audience, promote your products and services, and ultimately, increase sales.{" "}
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

export default EmailMarketing;
