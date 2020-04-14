<<<<<<< HEAD
import React from "react";
import { Container, Row, Col } from "reactstrap";
import AOS from "aos";
import BrandVisibility from "../Components/BrandComponent";
import Marketing from "../Components/MarketingComponent";
import FormComponent from "../Components/FormComponent";
import banner from "../assets/images/contact-banner.png";
import "../css/contact.css";
import "aos/dist/aos.css";
=======
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AOS from 'aos';
import ballons from "../assets/images/ballons.png";
import TopCaption from '../Components/TopCaption';
import Marketing from '../Components/Marketing';
import ContactForm from '../Components/ContactForm';
import banner from '../assets/images/contact-banner.png'
import Partners from '../Components/Partners';
import Carousel from '../Components/Carousel';
import '../css/contact.css';
import '../css/homepage.css';
import 'aos/dist/aos.css';
>>>>>>> odi



export default function Contact() {
<<<<<<< HEAD
  AOS.init({ duration: 1200 });
  return (
    <React.Fragment>
      <div data-aos="fade-up">
        <BrandVisibility />
      </div>
=======
  AOS.init({duration: 800,});
  return (
    <React.Fragment>
      <div data-aos="fade-up">
        <TopCaption title="Contact Us" subtitle="Customized Digital Marketing Strategies just for your brand" />
      </div> 
>>>>>>> odi
      <Container className="justify-content-center">
        <Row>
          <img alt="" src={banner} className="image1" data-aos="zoom-in"/>
        </Row>
      </Container>
<<<<<<< HEAD
      <Container>
        <div className="address-contact" data-aos="fade-left">
          <h3>Ibadan</h3>
          <p>
            Kuye Street, Ikolaba Estate, Adjacent <br /> A3 Estate, Ikolaba,
            Ibadan
          </p>
        </div>
=======
      <div className="container justify-content-center partners-lg" data-aos="fade-down">
        <Partners />
      </div>
      <div className="standing2" height="444">
        <div className="container">
          <div className="row standing-mb-wrapper">
            <h3 className="standing-mb  standing-contact" data-aos="flip-down">We stand out<br /> among the Crowd</h3>
            <div className="col-sm-6 standing-lg">
              <h3 className="standing" data-aos="flip-down">We stand out<br /> among the Crowd</h3>
            </div>
            <div className="col-sm-6 standing-lg">
              <img alt="" className="ballons" src={ballons} />
            </div>
          </div>
        </div>
      </div>
      <Container>
        <Row className="description">
          <Col className="item-2 item-contact" data-aos="fade-up">
              <p>We are Kin on making <br /> sure you have the best <br /> experince using our devices</p>
          </Col>
        </Row>
>>>>>>> odi
      </Container>
      <div className="marketing-about" data-aos="zoom-in">
        <Marketing />
      </div>
      <div className="form" data-aos="fade-up">
        <ContactForm />
      </div>
      <Container>
        <div className="address-contact" data-aos="flip-down">
            <h3>Ibadan</h3>
            <p>Kuye Street, Ikolaba Estate,<br /> Adjacent A3 Estate, Ikolaba, Ibadan.</p>
        </div>
      </Container>
      <div className="container justify-content-center partners-mb" data-aos="fade-down">
        <Partners />
      </div>
      <div className="container carousel-container" data-aos="fade-up">
        <Carousel />
      </div>
    </React.Fragment>
  );
}
