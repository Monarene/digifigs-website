import React from "react";
import arrow from '../assets/images/Arrow2.png'
import "../css/footer.css";
import group from "../assets/images/Group.png";
import instagram_black from "../assets/images/Instagram.png";
import twitter_black from "../assets/images/Twitter.png";
import facebook_black from "../assets/images/facebook.png";

// testing the SSH key
const Footer = () => {
  return (
    <div className="container-fluid footer-content-wrapper">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <img src={group} alt="" className="footergroup" />
          
        </div>
        <div className="col-sm-12 col-md-auto">
          <h6 className="ibadan">Ibadan</h6>
          <h6 className="address">
            Kuye Street, Ikolaba Estate, Adjacent A3 Estate, Ikolaba, Ibadan
          </h6>
        </div>
        <div className="col-sm-12 col-md-auto">
          <h6 className="ibadan">Our Mission</h6>
          <h6 className="address">
            Opportunity to work with achieve over and beyond their set targets.
            Our clients’ growth and satisfaction is our growth and fulfilment.{" "}
          </h6>
        </div>
        <div className="col-sm-12 col-md-auto">
          <h6 className="ibadan">Our Mission</h6>
          <h6 className="address">
            Opportunity to work with achieve over and beyond their set targets.
            Our clients’ growth and satisfaction is our growth and fulfilment.{" "}
          </h6>
        </div>
        <div className="col-sm-12 col-md-auto">
          <h6 className="ibadan">Our Mission</h6>
          <h6 className="address">
            Opportunity to work with achieve over and beyond their set targets.
            Our clients’ growth and satisfaction is our growth and fulfilment.{" "}
          </h6>
        </div>
      </div>
      <div className="row footer-bottom">
        <div className="col-sm-12 col-md-3">
          <div className="imagegroup">
              <img src={instagram_black} alt="" className="footerimage" />
              <img src={twitter_black} alt="" className="footerimage" />
              <img src={facebook_black} alt="" className="footerimage" />
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <p className="copy-txt">&copy; 2020 Copyright - Digifigs Limited | All Rights Reserved</p>
        </div>
        <div className="col-sm-12 col-md-5 sub">
          <p className="sub-txt">SUBSCRIBE TO OUR NEWSLETTER</p>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2 input-sub" type="email" placeholder="Your e-mail Address" aria-label="Email" />
            <button className="btn btn-primary btn-sub">
                <img className="arrow-sub" src={arrow} alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
