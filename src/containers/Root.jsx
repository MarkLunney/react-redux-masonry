import React from "react";
import { Provider } from "react-redux";
import App from "./App";

import "../styles/main.css";
import "../styles/gallery.css";
import "../styles/header.css";

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
