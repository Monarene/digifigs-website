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

const Main = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/services" component={ServicePage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Main;
