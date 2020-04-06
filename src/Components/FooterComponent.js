import React from "react";
import { Row, Col, Container } from "reactstrap";
import "../css/footer.css";
import group from "../assets/images/Group.png";
import instagram_black from "../assets/images/Instagram.png";
import twitter_black from "../assets/images/Twitter.png";
import facebook_black from "../assets/images/facebook.png";

// testing the SSH key
const Footer = () => {
  return (
    <Container>
      <Row className="footercontainer">
        <Col sm={12} md={4}>
          <div>
            <img src={group} alt="" className="footergroup" />
            <div className="iamgegroup">
              <img src={instagram_black} alt="" className="footerimage" />
              <img src={facebook_black} alt="" className="footerimage" />
              <img src={twitter_black} alt="" className="footerimage" />
            </div>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <h6 className="ibadan">Ibadan</h6>
          <h6 className="address">
            Kuye Street, Ikolaba Estate, Adjacent A3 Estate, Ikolaba, Ibadan
          </h6>
        </Col>
        <Col sm={12} md={4}>
          <h6 className="ibadan">Our Mission</h6>
          <h6 className="address">
            Opportunity to work with achieve over and beyond their set targets.
            Our clients’ growth and satisfaction is our growth and fulfilment.{" "}
          </h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
