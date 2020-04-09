import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AOS from 'aos';
import TopCaption from '../Components/TopCaption';
import Marketing from '../Components/Marketing';
import ContactForm from '../Components/ContactForm';
import banner from '../assets/images/contact-banner.png'
import '../css/contact.css';
import 'aos/dist/aos.css';



export default function Contact() {
    AOS.init({duration: 1200,});
  return (
    <React.Fragment>
      <div data-aos="fade-up">
            <TopCaption />
        </div> 
      <Container className="justify-content-center">
        <Row>
          <Col>
            <img alt="" src={banner} className="image1 mt-3" />
          </Col>
        </Row>
      </Container>
      <Container>
          <div className="address-contact" data-aos="fade-left">
              <h3>Ibadan</h3>
              <p>Kuye Street, Ikolaba Estate, Adjacent <br /> A3 Estate, Ikolaba, Ibadan</p>
          </div>
      </Container>
      <div className="marketing-contact" data-aos="zoom-in">
        <Marketing />
      </div>
      <div className="form" data-aos="slide-up">
        <ContactForm />
      </div>
    </React.Fragment>
  )
}
