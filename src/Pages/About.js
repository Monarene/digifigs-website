import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AOS from 'aos';
import BrandVisibility from '../Components/BrandComponent'
import Marketing from '../Components/MarketingComponent';
import FormComponent from '../Components/FormComponent';
import banner from '../assets/images/about-banner.png'
import '../css/about.css';
import 'aos/dist/aos.css';




export default function About() {
    AOS.init({duration: 1200,});
  return (
    <React.Fragment>
        <div data-aos="fade-up">
            <BrandVisibility />
        </div> 
      <Container className="justify-content-center">
        <Row>
          <Col>
            <img alt="" src={banner} className="image1 mt-3" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="description">
            <Col className="item-1" data-aos="fade-right">
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</p>
            </Col>
            <Col className="item-2" data-aos="fade-left">
                <p>We are Kin on making <br /> sure you have the best <br /> experince using our devices</p>
            </Col>
        </Row>
      </Container>
      <div className="marketing-about" data-aos="zoom-in">
        <Marketing />
      </div>
      <div className="form" data-aos="fade-up">
        <FormComponent />
      </div>
    </React.Fragment>
  )
}
