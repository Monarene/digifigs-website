import React, { Component } from "react";
import Partners from "../Components/Partners";
import down from "../assets/images/down.png";
import see_how from "../assets/images/cta.png";
import ballons from "../assets/images/ballons.jpg";
import new_image from "../assets/images/home-banner.jpg";
import capa from "../assets/images/Capa_1.png";
import target from "../assets/images/Target.png";
import arrow from "../assets/images/Arrow.png";
import heroshe from "../assets/images/heroshe.jpg";
import heroshe_mb from "../assets/images/heroshe-mb.jpg";
import heroshe_text from "../assets/images/heroshe-text.png";
import ContactForm from "../Components/ContactForm";
import TopCaption from "../Components/TopCaption";
import Marketing from "../Components/Marketing";
import StandOut from "..//Components/StandOut";
import CaptionImage from "../Components/CaptionImage";
import Carousel from "../Components/Carousel";
import Service from "../Components/Service";
import contentMarketing from "../assets/images/contentMarketing.svg";
import fb_ig from "../assets/images/ig_and_fb.svg";
import mobile_app from "../assets/images/Mobile_App_dev.svg";
import social_media from "../assets/images/Ad.svg";
import product_branding from "../assets/images/Product_Branding.svg";
import email_marketing from "../assets/images/email_marketing.svg";
import { Link } from "react-router-dom";

import "../css/homepage.css";
import "../css/service.css";
import "../css/form.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          image: target,
          imgClass: "target",
          text1: "Search Engine Optimization",
          text2:
            "Get your website to rank higher on search engine results pages through the improved online visibility that we offer through our SEO services.",
        },
        {
          image: capa,
          imgClass: "capa",
          text1: "Web Development",
          text2:
            " We will help you build a website that shows the brand image you want your website visitors to see. We also provide quality services in web hosting.",
        },
        {
          image: contentMarketing,
          imgClass: "capa",
          text1: "Content Marketing",
          text2:
            "Our content marketing service will help your brand not only express its intended message but also deliver value which is the focal point of content marketing.",
        },
        {
          image: fb_ig,
          imgClass: "capa",
          text1: "Facebook (& Instagram) Ads ",
          text2:
            "The Facebook and Instagram Ads service connects you to an endless pool of potential customers across the world on the largest social media platforms.",
        },
        {
          image: mobile_app,
          imgClass: "capa",
          text1: "Mobile App Development",
          text2:
            "Our team of developers understand the processes and procedures involved in software writing and programming.",
        },
        {
          image: social_media,
          imgClass: "capa",
          text1: "Social Media Marketing ",
          text2:
            "With an effective strategy in place, we’ll use social media as a tool to grow your brand’s reach, increase sales, and drive website traffic.",
        },
        {
          image: product_branding,
          imgClass: "capa",
          text1: "Product Branding & Packaging",
          text2:
            "We will help you define the uniqueness of your product amidst the competition. Our team will work to ideate and create a definitive brand that highlights your product’s essence and also appeals to your customers.",
        },
        {
          image: email_marketing,
          imgClass: "capa",
          text1: "Email Marketing",
          text2:
            "We will create email marketing campaigns to engage your audience, promote your products and services, and ultimately, increase sales.",
        },
      ],
      itemsToShow: 2,
      expanded: false,
      imgClass: "capa",
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.state.itemsToShow === 2
      ? this.setState({
          itemsToShow: this.state.services.length,
          expanded: true,
        })
      : this.setState({ itemsToShow: 2, expanded: false });
  }

  render() {
    return (
      <div>
        <div>
          <TopCaption
            title="Get the visibility your brand needs"
            subtitle="Customized Digital Marketing Strategies just for your brand"
          />
        </div>

        <div>
          <CaptionImage image={new_image} />
        </div>
        <div className="container justify-content-center partners-lg">
          <Partners />
        </div>
        <div className="standing2" height="444">
          <StandOut />
        </div>
        <div className="container justify-content-center partners-mb">
          <Partners />
        </div>
        <div>
          <Marketing caption="Art of Digital Marketing" />
        </div>

        <div className="container carousel-container">
          <Carousel />
        </div>
        <div className="container justify-content-center">
          <div className="row services">
            <div className="col">
              <h3 className="buildingText">Build your Business</h3>
              <h6 className="services-header">SERVICES</h6>
            </div>
          </div>
          <div className="row engineO">
            {this.state.services
              .slice(0, this.state.itemsToShow)
              .map((service, i) => (
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <Service
                    imgClass={service.imgClass}
                    image={service.image}
                    text1={service.text1}
                    text2={service.text2}
                  />
                </div>
              ))}
          </div>
          <div></div>
          <div className="row see-all-wrapper">
            <div onClick={this.showMore}>
              {this.state.expanded ? (
                <button type="button" class="btn btn-link see-all">
                  See less
                </button>
              ) : (
                <button type="button" class="btn btn-link see-all">
                  See all
                </button>
              )}
            </div>
            <div>
              <img src={down} alt="" />
            </div>
          </div>
        </div>
        <div className="herosheContainer">
          <div className="container">
            <div className="row">
              <h6 className="casestudies">Case Studies</h6>
            </div>
            <div className="row heroshe-wrapper">
              <div className="col-sm-12 col-md-auto heroshecontainer2">
                <h3 className="herosheText1">
                  How we increased the website traffic by 1348%
                </h3>
                <div className="partcontainer">
                  <h4 className="herosheText2">
                    We also generated an 80% increase in signups
                  </h4>
                  <h4 className="herosheText3">
                    <Link to="/casestudies">See how</Link>

                    {/* <span>
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
                    </span> */}
                  </h4>
                </div>
                <img src={heroshe_text} alt="" className="herosheText4" />
              </div>
              <div className="col-sm-12 col-md-auto">
                <img src={heroshe} alt="" className="herosheImage" />
                <img src={heroshe_mb} alt="" className="herosheImage-mb" />
              </div>
              <div className="col-sm-12 col-md-auto see-how-wrapper">
                <img src={see_how} alt="" className="see-how" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <ContactForm resetForm={this.props.resetMessageForm} />
        </div>
      </div>
    );
  }
}

export default HomePage;
