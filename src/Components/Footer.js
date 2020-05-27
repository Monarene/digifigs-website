import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/images/Arrow2.png";
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
            <a href="https://instagram.com/digifigs" target="_blank">
              <img
                src={instagram_black}
                alt="Instagram"
                className="footer-icon"
              />
            </a>
            <a href="https://twitter.com/digifigsinc" target="_blank">
              <img src={twitter_black} alt="twitter" className="footer-icon" />
            </a>
            <a href="https://facebook.com/digifigs" target="_blank">
              <img
                src={facebook_black}
                alt="facebook"
                className="footer-icon fb-image"
              />
            </a>
          </div>
        </div>
        <div className="col-8 col-sm-8 col-md-8">
          <div className="row">
            <div className="col-4 col-sm-4 col-md-auto">
              <h6 className="ibadan">Navigation</h6>
              <Link to="/">
                <h6 className="address">Home</h6>
              </Link>
              <Link to="/about">
                <h6 className="address">About us</h6>
              </Link>
              <Link to="/contact">
                <h6 className="address">Contact us</h6>
              </Link>
            </div>
            <div className="col-4 col-sm-4 col-md-auto">
              <Link>
                <h6 className="ibadan">Services</h6>
              </Link>
              <Link to="/services/branding-and-packaging">
                <h6 className="address">Brand Packaging</h6>
              </Link>
              <Link to="/services/content-marketing">
                <h6 className="address">Content Marketing</h6>
              </Link>
              <Link>
                <h6 className="address">Email Marketing</h6>
              </Link>
              <Link to="/services/sm-marketing">
                <h6 className="address">Facebook and Instagram Ads</h6>
              </Link>
              <Link>
                <h6 className="address">Google Search Ads</h6>
              </Link>
              <Link to="/services/app-development">
                <h6 className="address">Mobile Development</h6>
              </Link>
              <Link to="/services/web-development">
                <h6 className="address">Website Development</h6>
              </Link>
              <Link to="/services/se-marketing">
                <h6 className="address">Search Engine Marketing</h6>
              </Link>
              <Link to="/services/seo">
                <h6 className="address">Search Engine Optimisation </h6>
              </Link>
            </div>
            {/*             <div className="col-4 col-sm-4 col-md-auto col-space"></div>
             */}{" "}
            <div className="col-4 col-sm-4 col-md-auto">
              <h6 className="ibadan">Case Studies</h6>
              <Link to="/casestudies">
                <h6 className="address">Heroshe</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row footer-bottom">
        <div className="col-sm-12 col-md-3">
          <div className="image-group">
            <a href="https://instagram.com/digifigs" target="_blank">
              <img src={instagram_black} alt="" className="footer-icon" />
            </a>
            <a href="https://twitter.com/digifigsinc" target="_blank">
              <img src={twitter_black} alt="" className="footer-icon" />
            </a>
            <a href="https://facebook.com/digifigs" target="_blank">
              <img src={facebook_black} alt="" className="footer-icon" />
            </a>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 copy">
          <p className="copy-txt">
            &copy; 2020 Copyright - Digifigs Limited | All Rights Reserved
          </p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 sub">
          <p className="sub-txt">SUBSCRIBE TO OUR NEWSLETTER</p>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2 input-sub"
              type="email"
              placeholder="Your e-mail Address"
              aria-label="Email"
            />
            <button className="btn btn-primary btn-sub">
              <img className="arrow-sub" src={arrow} alt="" />
            </button>
          </form>
        </div>
        <div className="col-sm-12 col-md-12 copy-mb">
          <p className="copy-txt">
            &copy; 2020 Copyright - Digifigs Limited | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
