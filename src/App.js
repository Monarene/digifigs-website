import React from "react";
import "./App.css";
import Main from "./Components/Main";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";

const store = configureStore();
function App() {
  return (
    <div>
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </Provider>
      </div>
    </div>
  );
}

export default App;
