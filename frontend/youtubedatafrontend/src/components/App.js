import React, { Component, Fragment } from "react";

import "antd/dist/antd.css";
import Header from "./layout/Header";
import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Header />
        </Provider>
      </>
    );
  }
}

export default App;
