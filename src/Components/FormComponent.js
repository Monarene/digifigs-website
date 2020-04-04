import React from "react";
import { Container, FormGroup, Col, Row, Input, Form } from "reactstrap";

import "../css/homebody.css";

const FormComponent = () => {
  return (
    <Container className="formcontainer">
      <Row>
        <Col className="ready">ready to Start ?</Col>
      </Row>
      <Row>
        <Col>
          <div className="contactContainer">
            <h4 className="contactText">0800 000 0000</h4>
            <h5 className="callus">Call us</h5>
          </div>
          <div>
            <h4 className="contactText">hello@digifigs.com</h4>
            <h5 className="callus" style={{ marginBottom: "40px" }}>
              {" "}
              Send an e-mail
            </h5>
          </div>
          <div>
            <h6 className="amessage"> or drop a message here</h6>
          </div>
        </Col>
      </Row>
      <Row>
        <div>
          <Form>
            <Row form>
              <Col>
                <FormGroup>
                  <Input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="full Name"
                    className="inputtext"
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    className="inputtext"
                    type="email"
                    name="emaill"
                    id="email"
                    placeholder="email Address"
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <textarea
                    className="inputtext"
                    type="textarea"
                    placeholder="  type a message"
                    rows="5"
                    cols="50"
                  ></textarea>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
      </Row>
    </Container>
  );
};

export default FormComponent;
