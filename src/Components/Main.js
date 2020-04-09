import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";


const Main = () => {
  return (
    <div className="App">
      <Header />
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
