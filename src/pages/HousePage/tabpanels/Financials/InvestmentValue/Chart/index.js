import React, { useContext, useEffect } from "react";
import _ from "lodash";
import Chartist from "chartist";
import { PageContext } from "../../../../../../utils";
import {
  getYearTenNetCashFlow,
  calcCumAppreciationGain,
  calcEquityBuildUp,
} from "../../../../../../utils/formulas";

import "./style.scss";

const CHART_LABELS = ["Year 1", "Year 3", "Year 5", "Year 10"];

const CHART_LOW = 0;

const Chart = () => {
  const {
    netCashFlow,
    purchasePrice,
    downPayment,
    closingCosts,
    estImmediateCosts,
    loanInterestRate,
  } = useContext(PageContext)[0];

  const netCashFlowYearTen = getYearTenNetCashFlow(netCashFlow.yearFive);
  const cumAppreciationGain = calcCumAppreciationGain({ purchasePrice });
  const equityBuildUp = calcEquityBuildUp({
    purchasePrice,
    downPayment,
    closingCosts,
    estImmediateCosts,
    loanInterestRate,
  });

  const ChartData = [
    [
      netCashFlow.yearOne,
      netCashFlow.yearThree,
      netCashFlow.yearFive,
      netCashFlowYearTen,
    ],
    [
      cumAppreciationGain.yearOne,
      cumAppreciationGain.yearThree,
      cumAppreciationGain.yearFive,
      cumAppreciationGain.yearTen,
    ],
    [
      equityBuildUp.yearOne,
      equityBuildUp.yearThree,
      equityBuildUp.yearFive,
      equityBuildUp.yearTen,
    ],
  ];

  useEffect(() => {
    new Chartist.Bar(
      ".ct-chart",
      {
        labels: CHART_LABELS,
        series: ChartData,
      },
      {
        low: CHART_LOW,
        high: equityBuildUp.yearTen * 1.2,
        stackBars: true,
        axisY: {
          labelInterpolationFnc: (value) => {
            return `$${_.round(value / 1000000, 1)}m`;
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
