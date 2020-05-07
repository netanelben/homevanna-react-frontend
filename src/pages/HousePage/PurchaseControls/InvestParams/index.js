import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem } from "reactstrap";
import classnames from "classnames";
import Tooltip from "../../../../components/Tooltip";
import { displayNumber } from "../../../../utils";

import "./style.scss";

const InvestParams = ({
  annualizedReturn,
  capRate,
  grossYield,
  cashFlow,
  appreciation,
}) => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="InvestParams">
      <TabContent>
        <TabPane>
          <div className="title flex">
            Total Return
            <Tooltip context="TotalReturn" />
            <span>${displayNumber(268760)}</span>
          </div>
        </TabPane>
      </TabContent>

      <Nav tabs justified className="upper-border">
        <NavItem
          className={classnames({ active: activeTab === "1" })}
          onClick={() => {
            toggle("1");
          }}
        >
          5 Yrs
        </NavItem>
        <NavItem
          className={classnames({ active: activeTab === "2" })}
          onClick={() => {
            toggle("2");
          }}
        >
          10 Yrs
        </NavItem>
        <NavItem
          className={classnames({ active: activeTab === "3" })}
          onClick={() => {
            toggle("3");
          }}
        >
          20 Yrs
        </NavItem>
        <NavItem
          className={classnames({ active: activeTab === "4" })}
          onClick={() => {
            toggle("4");
          }}
        >
          30 Yrs
        </NavItem>
      </Nav>

      <ul className="list">
        <li className="flex">
          <span>Annualized Return</span>
          <Tooltip context="AnnualizedReturn" />
          <span>{annualizedReturn}%</span>
        </li>
        <li className="flex">
          <span>Cap Rate</span>
          <Tooltip context="CapRate" />
          <span>{capRate}%</span>
        </li>
        <li className="flex">
          <span>Gross Yield</span>
          <Tooltip context="GrossYield" />
          <span>{grossYield}%</span>
        </li>
        <li className="flex">
          <span>Cash Flow</span>
          <Tooltip context="CashFlow" />
          <span>${displayNumber(cashFlow)}</span>
        </li>
        <li className="flex">
          <span>Appreciation</span>
          <Tooltip context="Appreciation" />
          <span>{appreciation}%</span>
        </li>
      </ul>
    </div>
  );
};

InvestParams.defaultProps = {
  annualizedReturn: "7.7",
  capRate: "8.2",
  grossYield: "17.1",
  cashFlow: 4175,
  appreciation: "3.0",
};

export default InvestParams;
