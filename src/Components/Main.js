import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../Pages/HomePage";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ServicePage from "../Pages/Services";

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
          path="/services"
          component={() => (
            <ServicePage resetMessageForm={props.resetMessageForm} />
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(connect(null, mapDispatchToProps)(Main));
