import React from "react";
import AOS from "aos";

// importing components
import TopCaption from "../Components/TopCaption";
import CaptionImage from "../Components/CaptionImage";
import Partners from "../Components/Partners";
import StandOut from "../Components/StandOut";

// importing css
import "aos/dist/aos.css";
import "../css/homepage.css";
import "../css/services.css";

// importing images
import people from "../assets/images/people.png";
import Marketing from "../Components/Marketing";
import content from "../assets/images/content_marketing.png";
import developement from "../assets/images/content_development.png";
import copywriting from "../assets/images/copywriting.png";
import people_black from "../assets/images/people_black.png";
import { Button } from "reactstrap";

//TO-DO implement the jumbotron on all pages

const ServicePage = () => {
  AOS.init({ duration: 800 });
  return (
    <React.Fragment>
      <div data-aos="fade-down">
        <TopCaption
          title="Content Marketing"
          subtitle="Our Content Marketing Team will create the right content that appeals to your target audience and drives them to take the needed action."
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
              <h5 className="contentText">Content Marketing Strategy</h5>
              <h6 className="content-text">
                We’ll connect your audience to your brand with engaging content.
                Before crafting content, we’ll first build a strategy that suits
                your brand’s objectives.
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
              <h5 className="contentText">Content development</h5>
              <h6 className="content-text">
                Our content development expertise will improve your brand’s
                reputation with thoroughly reviewed content and connect your
                brand to your audience.
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
              <h5 className="contentText">Copywriting</h5>
              <h6 className="content-text">
                We’ll increase your brand’s online awareness and attract new
                visitors to your website with relatable, appealing and
                accessible content.​
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h5 className="rejoice-text">
              Let’s help your brand express its intended message despite the
              crowd of competitors.
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
              className="text-white justify-content-center"
              style={{ margin: "auto" }}
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
      <div className="standing2" height="444" style={{ marginTop: "90px" }}>
        <StandOut />
      </div>
    </React.Fragment>
  );
};

export default ServicePage;
