import React from "react";
import netflix from "../assets/images/heroshe-text.png";
import facebook from "../assets/images/company-logo-1.png";
import google from "../assets/images/company-logo-2.png";
import vmware from "../assets/images/company-logo-3.png";
import toyota from "../assets/images/company-logo-4.PNG";
import "../css/homepage.css";

export default function Partners() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <h5 className="header3">See who loves to Work with us</h5>
        </div>
      </div>
      <div className="row partners-wrapper">
        <div className="col">
          <img alt="" src={netflix} className="company-logo" />
        </div>
        <div className="col">
          <img alt="" src={facebook} className="company-logo" />
        </div>
        <div className="col">
          <img alt="" src={google} className="company-logo" />
        </div>
        <div className="col">
          <img alt="" src={vmware} className="company-logo" />
        </div>
        <div className="col">
          <img alt="" src={toyota} className="company-logo" />
        </div>
      </div>
    </React.Fragment>
  );
}
