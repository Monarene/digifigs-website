import React from "react";
import { Container, Row, Col } from "reactstrap";
import Ellipse from "./Ellipse";
import '../css/caption.css'


const TopCaption = () => {
  return (
    <Container>
      <Ellipse />
      <Row>
        <Col>
          <h2 className="header1">Get the visibility <br /> your brand needs</h2>
        </Col>
      </Row>
      <Row>
        <h6 className="header2 text-center">
          Customized Digital Marketing Strategies just for your brand
        </h6>
      </Row>
    </Container>
  );
};

export default TopCaption;
