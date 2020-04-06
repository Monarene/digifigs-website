import React from "react";
import HeaderComponent from "./HeaderComponent";
import Footer from "./FooterComponent";
import HomePage from "../Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const Main = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/contact-us" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Main;
