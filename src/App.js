import React from "react";
import "./App.css";
import { Container } from "reactstrap";
import NavComponent from "./Components/NavComponent";
import Footer from "./Components/FooterComponent";
import HomeBody from "./Components/HomeBody";

function App() {
  return (
    <div>
      <div className="App">
        <NavComponent />

        <HomeBody />

        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
}

export default App;
