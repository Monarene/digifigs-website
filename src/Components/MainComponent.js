import React from "react";
import HeaderComponent from "./HeaderComponent";
import Footer from "./FooterComponent";
import HomeBody from "./HomeBody";
import { Switch, Route, Redirect } from "react-router-dom";

const Main = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route path="/home" component={HomeBody} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
};

export default Main;
