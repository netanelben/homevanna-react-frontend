import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Header from "./components/header/header";
import HouseCard from "./components/HouseCard";
import SellingCard from "./components/SellingCard";
import PropertyCharacteristics from "./components/PropertyCharacteristics";
import FinancialHighlight from "./components/FinancialHighlight";
import Features from "./components/Features";

import "./css/index.css";
import "./css/common.scss";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <HouseCard />
    <br />
    <SellingCard />
    <br />
    <Features />
    <br />
    <PropertyCharacteristics />
    <br />
    <FinancialHighlight />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
