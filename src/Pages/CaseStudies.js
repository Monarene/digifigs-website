// All components and libraries
import React from "react";
import TopCaption from "../Components/TopCaption";
import CaptionImage from "../Components/CaptionImage";
import AOS from "aos";

// All images
import fine_girl from "../assets/images/fine-girl.jpg";
import people_book from "../assets/images/people_book.png";
import book from "../assets/images/book.png";
import new_image from "../assets/images/new_insta.png";
import facebook_1 from "../assets/images/Rectangle 5.png";
import circle from "../assets/images/ellipse_1.png";
import number from "../assets/images/number.png";
import facebook_studies from "../assets/images/facebook_studies.png";
import insta_studies from "../assets/images/insta_studies.png";
import facebook_studies_2 from "../assets/images/facebook_studies_2.png";
import messanger from "../assets/images/facebook_messenger.png";
import plot from "../assets/images/plot.png";
import lean from "../assets/images/lean_methods.png";

// All CSS scripts
import "aos/dist/aos.css";
import "../css/casestudies.css";

const CaseStudies = () => {
  AOS.init({ duration: 800 });
  return (
    <React.Fragment>
      <div data-aos="fade-down">
        <TopCaption
          title="How we scaled Heroshe from 0 to 100"
          subtitle="Heroshe is an international shipping and logistics company that exclusively 
                    serves online shoppers in Nigeria looking to procure general merchandise in 
                    the US and have it shipped to Nigeria."
        />
      </div>

      <div data-aos="zoom-in">
        <CaptionImage image={fine_girl} />
      </div>
      <div className="container">
        <div className="row objective-container">
          <div className="col-sm-12 col-md-6 objective">
            <h3>Objective</h3>
          </div>
          <div className="col-sm-12 col-md-6 objective-text">
            To drive online visibility for the Heroshe brand, generate leads and
            conversions for improved sales and profit, to maintain
            correspondence with existing customers and build active engagement
            with potential ones.
          </div>
        </div>
        <div className="row">
          <h2 className="strategy">Strategy</h2>
          <h5 className="heroshe-work">
            Our work with Heroshe consists of a comprehensive digital marketing
            service that cuts across several strategies and channels including.
          </h5>
        </div>
        <div className="row rower">
          <div className="col-sm-12 col-md-6 book-container">
            <img src={people_book} alt="people book" className="book" />
          </div>
          <div className="col-sm-12 col-md-6 book-text">
            <h4>
              Effective sales copy: We crafted strategic, reader-focused copy
              with targeted call-to-action that prompts customer action.
            </h4>
          </div>
        </div>
        <div className="row rower">
          <div className="col-sm-12 col-md-6 book-text">
            <h3>
              Content creation, development, and distribution: We developed
              audience-centred content that captures the attention of the online
              followers and sustains engagement.
            </h3>
          </div>
          <div className="col-sm-12 col-md-6 book-container">
            <img src={book} alt="book" className="book-image" />
          </div>
        </div>
        <div className="row rower">
          <h3 className="col-sm-12 target-marketing">
            Targeted email marketing: We initiated email marketing campaigns
            created with a sequence that encourages effective progression across
            the sales funnel, helping Heroshe cultivate relationships with
            potential customers, keep{" "}
          </h3>
        </div>
        <div className="row rower">
          <div className="col-sm-12">
            <h3 className="accelerating"> Accelerating Marketing on</h3>
          </div>
          <div className="col-sm-12">
            <img src={new_image} alt="insta" className="new-insta" />
            <img src={facebook_1} alt="fb" className="new-fb" />
            <h3 className="social-media">
              <b style={{ fontWeight: "bold" }}>
                Social media management and marketing:
              </b>{" "}
              We drove the brand's online visibility and created awareness for
              the brand with highly targeted Facebook & Instagram Ads.
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h3 className="results">Results</h3>
          </div>
          <div className="col-sm-12">
            <h5 className="team">
              Our team continues to make great leaps with the Heroshe brand,
              working to deliver exceptional results through the various
              strategies we have adopted.
            </h5>
          </div>
          <div className="col-sm-12">
            <h5 className="team">
              In the course of executing the Heroshe project, we have so far
              achieved a cumulative reach of 706,812 people across Facebook,
              Instagram and Facebook Messenger.
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <img className="circle" src={circle} alt="circle" />
          </div>
          <div className="col-sm-8">
            <img src={number} alt="numbers" />
            <img src={facebook_studies} alt="facebook 1" />
            <img src={facebook_studies_2} alt="Facebook 2" />
            <img src={insta_studies} alt="Instagram Image" />
            <img src={messanger} alt="Messanger" />
          </div>
        </div>
        <div className="row">
          <h3 className="col-sm-12">
            The Heroshe website has seen a geometric increase - up to a whopping
            1348% progression rate - in the number of new visitors on the
            website. This percentage derives from the exponential jump from 2100
            to 30,414 visitors between December 2019 & January 2020 to February
            & March 2020.
          </h3>
          <div className="col-sm-12">
            <img src={plot} alt="plot image" />
            <h4>
              With an 80% + increase in signups between February 1st and March
              31st 2020, we have helped propel the brand into a vibrant
              community of online shopping enthusiasts who are consistently on
              the lookout for affordable shopping deals and discount offers.
            </h4>
            <h4>
              These results are evidence of the wholesome impression our
              outreach strategies have on the audience segments peculiar to the
              various platforms.
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <a>Visit Heroshe.com & start shoppig on US online stores</a>
          </div>
          <div className="col-sm-6">
            <h3>Some funny image</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CaseStudies;
