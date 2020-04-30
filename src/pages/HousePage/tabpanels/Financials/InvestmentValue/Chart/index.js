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
  [0, 250000, 450000, 70000, 71000, 75000, 78000, 80000, 1000000],
  [100, 250000, 450000, 70000, 71000, 75000, 78000, 80000, 1000000],
  [200, 250000, 450000, 70000, 71000, 75000, 78000, 80000, 1000000],
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
