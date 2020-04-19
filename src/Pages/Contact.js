import React from "react";
import { Container, Row, Col } from "reactstrap";
import AOS from "aos";
import ballons from "../assets/images/ballons.png";
import TopCaption from "../Components/TopCaption";
import Marketing from "../Components/Marketing";
import ContactForm from "../Components/ContactForm";
import banner from "../assets/images/contact-banner.png";
import Partners from "../Components/Partners";
import Carousel from "../Components/Carousel";
import StandOut from "../Components/StandOut";
import "../css/contact.css";
import "../css/homepage.css";
import "aos/dist/aos.css";

export default function Contact(props) {
  AOS.init({ duration: 800 });
  return (
    <React.Fragment>
      <div data-aos="fade-up">
        <TopCaption
          title="Contact Us"
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
          <Col className="item-2 item-contact" data-aos="fade-up">
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
      <div className="form" data-aos="fade-up">
        <ContactForm resetForm={props.resetMessageForm} />
      </div>
      <Container>
        <div className="address-contact" data-aos="flip-down">
          <h3>Ibadan</h3>
          <p>
            Kuye Street, Ikolaba Estate,
            <br /> Adjacent A3 Estate, Ikolaba, Ibadan.
          </p>
        </div>
      </Container>
      <div
        className="container justify-content-center partners-mb"
        data-aos="fade-down"
      >
        <Partners />
      </div>
      <div className="container carousel-container" data-aos="fade-up">
        <Carousel />
      </div>
    </React.Fragment>
  );
}
