import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
// import Header from "./components/header/header";
// import HousePage from "./pages/HousePage";

import "./css/layout.scss";
import "./css/common.scss";
import "./css/index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Header /> */}
    {/* <HousePage /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
