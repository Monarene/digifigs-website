import React from "react";
import { Container, Row, Col } from "reactstrap";
import ballons from "../assets/images/ballons.jpg";
import TopCaption from "../Components/TopCaption";
import Marketing from "../Components/Marketing";
import ContactForm from "../Components/ContactForm";
import banner from "../assets/images/contact-banner.jpg";
import Partners from "../Components/Partners";
import Carousel from "../Components/Carousel";
import StandOut from "../Components/StandOut";
import "../css/contact.css";
import "../css/homepage.css";

export default function Contact(props) {
  return (
    <React.Fragment>
      <div>
        <TopCaption
          title="Contact Us"
          subtitle="Customized Digital Marketing Strategies just for your brand"
        />
      </div>
      {/* <Container className="justify-content-center">
        <Row>
          <img alt="" src={banner} className="image1" />
        </Row>
      </Container>
      <div className="container justify-content-center partners-lg">
        <Partners />
      </div> */}
      {/* <Container>
        <Row className="description">
          <Col className="item-2 item-contact">
            <p>
              We are Kin on making <br /> sure you have the best <br />{" "}
              experince using our devices
            </p>
          </Col>
        </Row>
      </Container> */}
      <div className="marketing-about">
        <Marketing caption="Art of Digital Marketing" />
      </div>
      <div className="standing2" height="444">
        <StandOut />
      </div>
      <div className="container justify-content-center partners-mb">
        <Partners />
      </div>
      <Container>
        <div className="address-contact">
          <h3>Ibadan</h3>
          <p>
            Kuye Street, Ikolaba Estate,
            <br /> Adjacent A3 Estate, Ikolaba, Ibadan.
          </p>
        </div>
      </Container>
      <div className="form">
        <ContactForm resetForm={props.resetMessageForm} />
      </div>
      <div className="container carousel-container">
        <Carousel />
      </div>
    </React.Fragment>
  );
}
