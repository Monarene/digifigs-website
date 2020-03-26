import React from "react";
import { Row, Col } from "reactstrap";
import group from "../assets/images/Group.png";
import instagram_black from "../assets/images/Instagram.png";
import twitter_black from "../assets/images/Twitter.png";
import facebook_black from "../assets/images/FACEBOOK.png";

const Footer = () => {
  return (
    <Row sm={12} md={4}>
      <Col>
        <img src={group} alt="" />
      </Col>
      <Col>
        <img src={instagram_black} alt="" />
        <img src={facebook_black} alt="" />
        <img src={twitter_black} alt="" />
      </Col>
    </Row>
  );
};

export default Footer;
