import React from "react";
import "./App.css";
import Main from "./Components/MainComponent";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
