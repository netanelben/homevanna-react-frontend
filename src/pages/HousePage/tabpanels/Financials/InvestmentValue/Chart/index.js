import React, { useEffect } from "react";
import Chartist from "chartist";
import "./style.scss";

const CHART_LABELS = [
  "Year 1",
  "Year 5",
  "Year 10",
  "Year 15",
  "Year 20",
  "Year 25",
  "Year 30",
];

const ChartData = [[0, 1200000, 1400000, 1300000]];

const Chart = () => {
  useEffect(() => {
    new Chartist.Bar(
      ".ct-chart",
      {
        labels: CHART_LABELS,
        series: ChartData,
      },
      {
        stackBars: true,
        axisY: {
          labelInterpolationFnc: (value) => {
            return `$${value / 1000}m`;
          },
        },
      }
    ).on("draw", ({ type, element }) => {
      if (type === "bar") {
        element.attr({
          style: "stroke-width: 32px; border-radius: 3px;",
        });
      }
    });

    return () => {};
  });

  return <div className="ct-chart" />;
};

export default Chart;
