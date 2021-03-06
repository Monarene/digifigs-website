import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../Pages/HomePage";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import CaseStudies from "../Pages/CaseStudies";
import SEMarketing from "../Pages/services/SEMarketing";
import SEO from "../Pages/services/SEO";
import ContentMarketing from "../Pages/services/ContentMarketing";
import WebDev from "../Pages/services/WebDev";
import MobileDev from "../Pages/services/MobileDev";
import SocialMarketing from "../Pages/services/SocialMarketing";
import BrandingPackaging from "../Pages/services/BrandingPackaging";
import EmailMarketing from "../Pages/services/EmailMarketing";
import GoogleSearchAds from "../Pages/services/GoogleSearchAds";
import FbInstaAds from "../Pages/services/FbInstaAds";
import ThanksPage from "../Pages/ThankYou";

const mapDispatchToProps = (dispatch) => ({
  resetMessageForm: () => {
    dispatch(actions.reset("sendMessage"));
  },
});

const Main = (props) => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact={true}
          path="/"
          component={() => (
            <HomePage resetMessageForm={props.resetMessageForm} />
          )}
        />
        <Route
          path="/about-us"
          component={() => <About resetMessageForm={props.resetMessageForm} />}
        />
        <Route
          path="/contact-us"
          component={() => (
            <Contact resetMessageForm={props.resetMessageForm} />
          )}
        />
        <Route
          exact
          path="/services/content-marketing"
          component={() => (
            <ContentMarketing resetMessageForm={props.resetMessageForm} />
          )}
        />
        <Route
          exact
          path="/services/se-marketing"
          component={() => (
            <SEMarketing resetMessageForm={props.resetMessageForm} />
          )}
        />
        <Route
          exact
          path="/casestudies"
          component={() => (
            <CaseStudies resetMessageForm={props.resetMessageForm} />
          )}
        />
        <Route
          exact
          path="/services/seo"
          component={() => <SEO resetMessageForm={props.resetMessageForm} />}
        />
        <Route
          exact
          path="/services/web-development"
          component={() => <WebDev resetMessageForm={props.resetMessageForm} />}
        />
        <Route
          exact
          path="/services/app-development"
          component={() => (
            <MobileDev resetMessageForm={props.resetMessageForm} />
          )}
        />
        <Route
          exact
          path="/services/sm-marketing"
          component={() => (
            <SocialMarketing resetMessageForm={props.resetMessageForm} />
          )}
        />
        <Route
          exact
          path="/services/branding-and-packaging"
          component={() => (
            <BrandingPackaging resetMessageForm={props.resetMessageForm} />
          )}
        />
        <Route
          exact
          path="/services/email-marketing"
          component={() => (
            <EmailMarketing resetMessageForm={props.resetMessageForm} />
          )}
        />
        <Route
          exact
          path="/services/google-search-ads"
          component={() => (
            <GoogleSearchAds resetMessageForm={props.resetMessageForm} />
          )}
        />
        <Route
          exact
          path="/services/facebook-instagram-ads"
          component={() => (
            <FbInstaAds resetMessageForm={props.resetMessageForm} />
          )}
        />
        <Route exact path="/thankyou" component={ThanksPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(connect(null, mapDispatchToProps)(Main));
