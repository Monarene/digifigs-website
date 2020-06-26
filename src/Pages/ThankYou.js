import React from "react";
import logo from "../assets/images/mark.png";
import pointer from "../assets/images/pointer.png";
import "../css/thankyou.css";

const ThanksPage = () => {
  return (
    <div className="first">
      <img src={logo} />
      <h2 className="second">Thank You!</h2>
      <h4 className="third">For contacting Digifigs Limited</h4>
      <h4 className="fourth">We will get back to you shortly</h4>
      <div className="fifth">
        <img src={pointer} className="pointer" />
        <a href="/">
          <h5 className="goback"> Go Back To Home</h5>{" "}
        </a>
      </div>
    </div>
  );
};

export default ThanksPage;
