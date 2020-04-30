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

const ChartData = [
  [250000, 450000, 70000, 71200, 75000, 78000, 80000, 1050000],
  [1100, 455000, 72000, 71500, 75000, 78000, 80000, 1000500],
  [2055, 251000, 453000, 71300, 75000, 78000, 1300000, 2300000],
];

const Chart = () => {
  useEffect(() => {
    new Chartist.Bar(
      ".ct-chart",
      {
        labels: CHART_LABELS,
        series: ChartData,
      },
      {
        plugins: [Chartist.plugins.tooltip()],
        stackBars: true,
        axisY: {
          labelInterpolationFnc: (value) => {
            return `$${value / 1000000}m`;
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
