import React, { useContext, useState } from "react";
import { TabContent, TabPane, Nav, NavItem, Table } from "reactstrap";
import classnames from "classnames";
import Chart from "./Chart";
import Tooltip from "../../../../../components/Tooltip";
import { PageContext, displayNumber } from "../../../../../utils";
import {
  getYearTenNetCashFlow,
  calcEquityBuildUp,
  calcCumAppreciationGain,
} from "../../../../../utils/formulas";

import "./style.scss";

const InvestmentValue = () => {
  const {
    netCashFlow,
    purchasePrice,
    downPayment,
    closingCosts,
    estImmediateCosts,
    loanInterestRate,
  } = useContext(PageContext)[0];

  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const netCashFlowYearTen = getYearTenNetCashFlow(netCashFlow.yearFive);
  const cumAppreciationGain = calcCumAppreciationGain({ purchasePrice });
  const equityBuildUp = calcEquityBuildUp({
    purchasePrice,
    downPayment,
    closingCosts,
    estImmediateCosts,
    loanInterestRate,
  });

  const totalInvestmentValue = {
    yearOne:
      netCashFlow.yearOne + cumAppreciationGain.yearOne + equityBuildUp.yearOne,
    yearThree:
      netCashFlow.yearThree +
      cumAppreciationGain.yearThree +
      equityBuildUp.yearThree,
    yearFive:
      netCashFlow.yearFive +
      cumAppreciationGain.yearFive +
      equityBuildUp.yearFive,
    yearTen:
      netCashFlowYearTen + cumAppreciationGain.yearTen + equityBuildUp.yearTen,
  };

  return (
    <div className="InvestmentValue card-box">
      <Nav tabs>
        <NavItem
          className={classnames({ active: activeTab === "1" })}
          onClick={() => {
            toggle("1");
          }}
        >
          Overview
        </NavItem>
        <NavItem
          className={classnames({ active: activeTab === "2" })}
          onClick={() => {
            toggle("2");
          }}
        >
          Cash Flow
        </NavItem>
        <NavItem
          className={classnames({ active: activeTab === "3" })}
          onClick={() => {
            toggle("3");
          }}
        >
          Equity
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div className="title">
            Est. Investment Value Over Time
            <Tooltip context="EstInvestmentValueOverTime" />
          </div>

          <Chart />

          <Table borderless={true} responsive>
            <thead>
              <tr>
                <th></th>
                <th>Year 1</th>
                <th>Year 3</th>
                <th>Year 5</th>
                <th>Year 10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Cumulative Net Cash Flow
                  <Tooltip context="CumulativeNetCashFlow" />
                </td>
                <td>
                  ${displayNumber(netCashFlow.yearOne, true)}
                  <div className="text-small">
                    ${displayNumber(netCashFlow.yearOne / 12)}/mo
                  </div>
                </td>
                <td>
                  ${displayNumber(netCashFlow.yearThree, true)}
                  <div className="text-small">
                    ${displayNumber(netCashFlow.yearThree / 12)}/mo
                  </div>
                </td>
                <td>
                  ${displayNumber(netCashFlow.yearFive, true)}
                  <div className="text-small">
                    ${displayNumber(netCashFlow.yearFive / 12)}/mo
                  </div>
                </td>
                <td>
                  ${displayNumber(netCashFlowYearTen, true)}
                  <div className="text-small">
                    ${displayNumber(netCashFlowYearTen / 12)}/mo
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Cumulative Appreciation Gain
                  <Tooltip context="CumulativeAppreciationGain" />
                </td>
                <td>${displayNumber(cumAppreciationGain.yearOne, true)}</td>
                <td>${displayNumber(cumAppreciationGain.yearThree, true)}</td>
                <td>${displayNumber(cumAppreciationGain.yearFive, true)}</td>
                <td>${displayNumber(cumAppreciationGain.yearTen, true)}</td>
              </tr>
              <tr>
                <td>
                  Equity Build Up
                  <Tooltip context="EquityBuildUp" />
                </td>
                <td>${displayNumber(equityBuildUp.yearOne, true)}</td>
                <td>${displayNumber(equityBuildUp.yearThree, true)}</td>
                <td>${displayNumber(equityBuildUp.yearFive, true)}</td>
                <td>${displayNumber(equityBuildUp.yearTen, true)}</td>
              </tr>
              <tr>
                <td>
                  Total Investment Value
                  <Tooltip context="TotalInvestmentValue" />
                </td>
                <td>${displayNumber(totalInvestmentValue.yearOne, true)}</td>
                <td>${displayNumber(totalInvestmentValue.yearThree, true)}</td>
                <td>${displayNumber(totalInvestmentValue.yearFive, true)}</td>
                <td>${displayNumber(totalInvestmentValue.yearTen, true)}</td>
              </tr>
            </tbody>
          </Table>
        </TabPane>
        <TabPane tabId="2"></TabPane>
        <TabPane tabId="3"></TabPane>
      </TabContent>
    </div>
  );
};

export default InvestmentValue;
