import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../Pages/HomePage";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import SEMarketing from "../Pages/services/SEMarketing";
import SEO from "../Pages/services/SEO";
import ContentMarketing from "../Pages/services/ContentMarketing";
import WebDev from "../Pages/services/WebDev";
import MobileDev from "../Pages/services/MobileDev";

const mapDispatchToProps = (dispatch) => ({
  resetMessageForm: () => {
    dispatch(actions.reset("sendMessage"));
    console.log("I have run");
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
          path="/about"
          component={() => <About resetMessageForm={props.resetMessageForm} />}
        />
        <Route
          path="/contact"
          component={() => (
            <Contact resetMessageForm={props.resetMessageForm} />
          )}
        />
        <Route
          exact path="/services/content-marketing"
          component={() => (
            <ContentMarketing resetMessageForm={props.resetMessageForm} />
          )}
        />
        <Route
          exact path="/services/se-marketing"
          component={() => (
            <SEMarketing resetMessageForm={props.resetMessageForm} />
          )}
        />
        <Route
          exact path="/services/seo"
          component={() => (
            <SEO resetMessageForm={props.resetMessageForm} />
          )}
        />
        <Route
          exact path="/services/web-development"
          component={() => (
            <WebDev resetMessageForm={props.resetMessageForm} />
          )}
        />
        <Route
          exact path="/services/app-development"
          component={() => (
            <MobileDev resetMessageForm={props.resetMessageForm} />
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(connect(null, mapDispatchToProps)(Main));
