import React from "react";
import { Container, Row, Col } from "reactstrap";
import Ellipse from "./Ellipse";
import "../css/caption.css";

const TopCaption = ({ title, subtitle }) => {
  return (
    <Container>
      <Ellipse />
      <Row>
        <Col>
          <h2 className="header1">{title}</h2>
        </Col>
      </Row>
      <Row>
        <h6 className="header2 text-center">{subtitle}</h6>
      </Row>
      <div className="get-started-mb">
        <a href="#get-started">
          <button class="btn btn-primary my-2 my-sm-0" type="button">
            Get Started
          </button>
        </a>
      </div>
    </Container>
  );
};

export default TopCaption;
