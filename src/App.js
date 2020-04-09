import React from "react";
import "./App.css";
import Main from "./Components/Main";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
