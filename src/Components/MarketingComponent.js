import React from "react";
import { Container, Row, Col } from "reactstrap";
import megaphone from "../assets/images/megaphone.png";

const Marketing = () => {
  return (
    <Container className="marketing">
      <Row>
        <Col sm={12}>
          <img src={megaphone} alt="" className="megaphone" />
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <h3 className="mtext">We have Mastered the Art of Marketing</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Marketing;
