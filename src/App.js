import React from "react";
import "./App.css";
import Main from "./Components/Main";
import ScrollToTop from "./Components/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";

const store = configureStore();
function App() {
  return (
    <div>
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <ScrollToTop>
              <Main />
            </ScrollToTop>
          </BrowserRouter>
        </div>
      </Provider>
    </div>
  );
}

export default App;
