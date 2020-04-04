import React from "react";
import { Row, Col, Container } from "reactstrap";
import "../css/homebody.css";
import netflix from "../assets/images/netflix.png";
import facebook from "../assets/images/facebook.png";
import google from "../assets/images/google.png";
import vmware from "../assets/images/vmware.png";
import toyota from "../assets/images/toyota.png";
import ballons from "../assets/images/ballons.png";
import new_image from "../assets/images/fine-girl.png";
import joe_netflix from "../assets/images/Joe _ Netflix.png";
import capa from "../assets/images/Capa_1.png";
import target from "../assets/images/Target.png";
import arrow from "../assets/images/Arrow.png";
import heroshe from "../assets/images/heroshe.png";
import FormComponent from "../Components/FormComponent";
import BrandComponent from "../Components/BrandComponent";
import MarketingComponent from "../Components/MarketingComponent";

const HomeBody = () => {
  return (
    <div>
      <BrandComponent />
      <Container className="justify-content-center">
        <Row>
          <Col>
            <img alt="" src={new_image} className="image1 mt-3" />
          </Col>
        </Row>
      </Container>
      <Container className="justify-content-center">
        <Row>
          <Col>
            <h5 className="header3">See who loves to Work with us</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <img alt="" src={netflix} className="company-logo" />
          </Col>
          <Col>
            <img alt="" src={facebook} className="company-logo" />
          </Col>
          <Col>
            <img alt="" src={google} className="company-logo" />
          </Col>
          <Col>
            <img alt="" src={vmware} className="company-logo" />
          </Col>
          <Col>
            <img alt="" src={toyota} className="company-logo" />
          </Col>
        </Row>
      </Container>
      <Container className="mt-4 standing2" height="444" width="1542">
        <Row>
          <Col sm={6}>
            <h3 className="standing">We stand out among the Crowd</h3>
          </Col>
          <Col sm={6}>
            <img alt="" className="ballons" src={ballons} />
          </Col>
        </Row>
      </Container>
      <MarketingComponent />
      <Container className="joecontainer">
        <Row>
          <Col>
            <img src={joe_netflix} alt="" className="joenetflix" />
          </Col>
        </Row>
      </Container>
      <Container className="justify-content-center">
        <Row>
          <Col>
            <h3
              className="buildingText"
              style={{ marginTop: "30px", marginBottom: "40px" }}
            >
              Build your Business
            </h3>
          </Col>
        </Row>
        <Row className="engineO">
          <Col sm={12} md={6}>
            <img src={target} alt="" className="target" />
            <h4 className="targetText1">Search Engine Optimization</h4>
            <h5 className="targetText2">
              Get your website to rank higher on search engine results pages
              through the improved online visibility that we offer through our
              SEO services.
            </h5>
          </Col>
          <Col sm={12} md={6}>
            <img src={capa} alt="" className="capa" />
            <h4 className="targetText1">Web Development</h4>
            <h5 className="targetText2">
              We will help you build a website that shows the brand image you
              want your website visitors to see. We also provide quality
              services in web hosting.
            </h5>
          </Col>
        </Row>
      </Container>
      <div className="herosheContainer">
        <Container>
          <Row>
            <h6 className="casestudies">Case Studies</h6>
          </Row>
          <div className="herosheContainer2">
            <Row className="heroshecontainer">
              <Col sm={12} md={6} className="heroshecontainer2">
                <h3 className="herosheText1">
                  How we scaled Heroshe from 0 to 100
                </h3>
                <div className="partcontainer">
                  <h4 className="herosheText2">
                    Get your website to rank higher on search engine results
                  </h4>
                  <h4 className="herosheText3">
                    See how
                    <span>
                      <img
                        alt=""
                        src={arrow}
                        style={{
                          height: "15.25px",
                          width: "32px",
                          paddingLeft: "5px",
                          textTransform: " transform: scaleX(-1) scaleY(-1)",
                        }}
                      />
                    </span>
                  </h4>
                </div>
                <h3 className="herosheText4">heroshe</h3>
              </Col>
              <Col sm={12} md={6}>
                <img src={heroshe} alt="" className="herosheImage" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <FormComponent />
    </div>
  );
};

export default HomeBody;
