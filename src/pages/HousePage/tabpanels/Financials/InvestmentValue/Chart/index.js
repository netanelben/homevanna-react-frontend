import React, { useContext, useEffect } from "react";
import Chartist from "chartist";
import { PageContext } from "../../../../../../utils";
import { getYearTenNetCashFlow } from "../../../../../../utils/formulas";

import "./style.scss";

const CHART_LABELS = ["Year 1", "Year 3", "Year 5", "Year 10"];

const CHART_LOW = 0;
const CHART_HIGH = 1500000;

const Chart = () => {
  const { netCashFlow } = useContext(PageContext)[0];
  const { yearOne, yearThree, yearFive } = netCashFlow;
  const yearTen = getYearTenNetCashFlow(yearFive);

  const ChartData = [[yearOne, yearThree, yearFive, yearTen]];

  useEffect(() => {
    new Chartist.Bar(
      ".ct-chart",
      {
        labels: CHART_LABELS,
        series: ChartData,
      },
      {
        low: CHART_LOW,
        high: CHART_HIGH,
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
  });

  return <div className="ct-chart" />;
};

export default Chart;
