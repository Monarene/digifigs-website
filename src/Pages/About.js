import React from "react";
import { Container, Row, Col } from "reactstrap";
import AOS from "aos";
import ballons from "../assets/images/ballons.jpg";
import TopCaption from "../Components/TopCaption";
import Marketing from "../Components/Marketing";
import ContactForm from "../Components/ContactForm";
import banner from "../assets/images/about-banner.jpg";
import Partners from "../Components/Partners";
import Carousel from "../Components/Carousel";
import StandOut from "../Components/StandOut";
import "../css/carousel.css";
import "../css/homepage.css";
import "../css/caption.css";
import "../css/about.css";
import "aos/dist/aos.css";

export default function About(props) {
  AOS.init({ duration: 800 });
  return (
    <React.Fragment>
      <div data-aos="fade-down">
        <TopCaption
          title="Get the visibility your brand needs"
          subtitle="Customized Digital Marketing Strategies just for your brand"
        />
      </div>
      <Container className="justify-content-center">
        <Row>
          <img alt="" src={banner} className="image1" data-aos="zoom-in" />
        </Row>
      </Container>
      <div
        className="container justify-content-center partners-lg"
        data-aos="fade-down"
      >
        <Partners />
      </div>
      <div className="standing2" height="444">
        <StandOut />
      </div>
      <Container>
        <Row className="description">
          <Col className="item-1" data-aos="fade-up">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col className="item-2" data-aos="fade-up">
            <p>
              We are Kin on making <br /> sure you have the best <br />{" "}
              experince using our devices
            </p>
          </Col>
        </Row>
      </Container>
      <div className="marketing-about" data-aos="zoom-in">
        <Marketing caption="Art of Digital Marketing" />
      </div>
      <div
        className="container justify-content-center partners-mb"
        data-aos="fade-down"
      >
        <Partners />
      </div>
      <div className="container carousel-container" data-aos="fade-up">
        <Carousel />
      </div>
      <div className="form" data-aos="fade-up">
        <ContactForm resetForm={props.resetMessageForm} />
      </div>
    </React.Fragment>
  );
}
