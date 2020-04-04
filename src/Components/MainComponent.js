import React from "react";
import HeaderComponent from "./HeaderComponent";
import Footer from "./FooterComponent";
import HomePage from "../Pages/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";

const Main = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
};

export default Main;
