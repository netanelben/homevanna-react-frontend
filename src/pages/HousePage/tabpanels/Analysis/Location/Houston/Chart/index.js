import React, { useEffect } from "react";
import Chartist from "chartist";
import { displayNumber } from "../../../../../../../utils";

import "./style.scss";

const CHART_LABELS = ["2012", "2014", "2016", "2018"];

const ChartData = [
  [1050, 1200, 1150, 1500, 1320, 1300, 1350, 1600, 1650, 1630],
];

const Chart = () => {
  useEffect(() => {
    new Chartist.Line(
      ".ct-chart-line",
      {
        labels: CHART_LABELS,
        series: ChartData,
      },
      {
        low: 1000,
        high: 2000,
        height: 460,
        axisY: {
          labelInterpolationFnc: (value) => {
            return `$${displayNumber(value)}`;
          },
        },
      }
    );
  });

  return <div className="ct-chart-line" />;
};

export default Chart;
