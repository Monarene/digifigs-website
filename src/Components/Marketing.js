import React from "react";
import { Container, Row, Col } from "reactstrap";
import megaphone from "../assets/images/megaphone.png";

const Marketing = ({ caption }) => {
  return (
    <Container className="marketing">
      <Row>
        <img src={megaphone} alt="" className="megaphone" />
      </Row>

      <Row>
        <h3 className="mtext">
          We have Mastered the <br /> {caption}
        </h3>
      </Row>
    </Container>
  );
};

export default Marketing;
