import React from "react";
import arrow from '../assets/images/Arrow2.png'
import "../css/footer.css";
import group from "../assets/images/Group.png";
import logo from "../assets/images/logo-footer.png";
import logo_tb from "../assets/images/logo-tb.png";
import instagram_black from "../assets/images/Instagram.png";
import twitter_black from "../assets/images/Twitter.png";
import facebook_black from "../assets/images/facebook.png";

// testing the SSH key
const Footer = () => {
  return (
    <div className="container-fluid footer-content-wrapper">
      <div className="row">
        <div className="col-4 col-sm-4 col-md-4">
          <img src={group} alt="" className="logo-footer main" />
          <img src={logo} alt="" className="logo-footer mb" />
          <img src={logo_tb} alt="" className="logo-footer tb" />
          <div className="image-group-mb">
              <img src={instagram_black} alt="" className="footer-icon" />
              <img src={twitter_black} alt="" className="footer-icon" />
              <img src={facebook_black} alt="" className="footer-icon" />
          </div>
        </div>
        <div className="col-8 col-sm-8 col-md-8">
          <div className="row">
            <div className="col-4 col-sm-4 col-md-auto">
              <h6 className="ibadan">Ibadan</h6>
              <h6 className="address">
                Kuye Street, Ikolaba Estate, Adjacent A3 Estate, Ikolaba, Ibadan
              </h6>
            </div>
            <div className="col-4 col-sm-4 col-md-auto">
              <h6 className="ibadan">Products</h6>
              <h6 className="address">
                Lorem ipsum sit amet, consectetur adipiscing elit
              </h6>
            </div>
            <div className="col-4 col-sm-4 col-md-auto col-space"></div>
            <div className="col-4 col-sm-4 col-md-auto">
              <h6 className="ibadan">Products</h6>
              <h6 className="address">
                Lorem ipsum sit amet, consectetur adipiscing elit
              </h6>
            </div>
            <div className="col-4 col-sm-4 col-md-auto">
              <h6 className="ibadan">Products</h6>
              <h6 className="address">
                Lorem ipsum sit amet, consectetur adipiscing elit
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row footer-bottom">
        <div className="col-sm-12 col-md-3">
          <div className="image-group">
              <img src={instagram_black} alt="" className="footer-icon" />
              <img src={twitter_black} alt="" className="footer-icon" />
              <img src={facebook_black} alt="" className="footer-icon" />
          </div>
        </div>
        <div className="col-sm-12 col-md-4 copy">
          <p className="copy-txt">&copy; 2020 Copyright - Digifigs Limited | All Rights Reserved</p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 sub">
          <p className="sub-txt">SUBSCRIBE TO OUR NEWSLETTER</p>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2 input-sub" type="email" placeholder="Your e-mail Address" aria-label="Email" />
            <button className="btn btn-primary btn-sub">
                <img className="arrow-sub" src={arrow} alt="" />
            </button>
          </form>
        </div>
        <div className="col-sm-12 col-md-12 copy-mb">
          <p className="copy-txt">&copy; 2020 Copyright - Digifigs Limited | All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
