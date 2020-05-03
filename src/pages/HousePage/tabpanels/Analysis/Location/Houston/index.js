import React from "react";
import Chart from "./Chart";
import "./style.scss";

const Houston = () => (
  <div className="Houston">
    <div className="sub-title">
      Houston
      <a href="#">See more data</a>
    </div>

    <div className="chart-title">Rent Change</div>

    <Chart />
  </div>
);

export default Houston;
