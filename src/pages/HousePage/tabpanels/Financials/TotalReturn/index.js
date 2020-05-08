import React, { useContext, useState } from "react";
import { Row, Col, TabContent, TabPane, Nav, NavItem, Table } from "reactstrap";
import Slider from "rc-slider";
import classnames from "classnames";
import Tooltip from "../../../../../components/Tooltip";
import { PageContext, displayNumber } from "../../../../../utils";
import {
  MIN_APPRECIATION_RATE,
  MAX_APPRECIATION_RATE,
} from "../../../../../utils/config";

import "rc-slider/assets/index.css";
import "./style.scss";

const TotalReturn = ({ amount, cumNetCashFlow, salesProceed }) => {
  const { appreciation } = useContext(PageContext)[0];
  const dispatch = useContext(PageContext)[1];

  const handleAppreciationChange = (value) => {
    dispatch({ type: "APPRECIATION_RATE_CHANGE", payload: value });
  };

  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="TotalReturn card-box">
      <Row noGutters>
        <Col sm="6">
          <div className="title">
            TOTAL RETURN
            <Tooltip context="TotalReturn" />
          </div>
          <div className="price-large">${displayNumber(amount)}</div>
        </Col>

        <Col sm="6">
          <TabContent>
            <TabPane>
              <div className="title flex">
                Appreciation
                <Tooltip context="Appreciation" />
                <span>{appreciation}%</span>
              </div>

              {activeTab === "custom" && (
                <Slider
                  className="appreciation-slider"
                  value={appreciation}
                  onChange={handleAppreciationChange}
                  step={0.5}
                  min={MIN_APPRECIATION_RATE}
                  max={MAX_APPRECIATION_RATE}
                />
              )}
            </TabPane>
          </TabContent>

          <Nav tabs justified className="upper-border">
            <NavItem
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Hist. 20 Yr.
            </NavItem>
            <NavItem
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Hist. 1 Yr.
            </NavItem>
            <NavItem
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Proj. 5 Yr.
            </NavItem>
            <NavItem
              className={classnames({ active: activeTab === "custom" })}
              onClick={() => {
                toggle("custom");
              }}
            >
              Custom
            </NavItem>
          </Nav>
        </Col>
      </Row>

      <Row className="cash-info">
        <Col sm="12" md="6">
          <span>
            Cum Net Cash Flow
            <Tooltip context="CumNetCashFlow" />
          </span>
          <span className="text-large">${displayNumber(cumNetCashFlow)}</span>
        </Col>
        <Col sm="12" md="6">
          <span>
            Sales Proceed
            <Tooltip context="SalesProceed" />
          </span>
          <span className="text-large">${displayNumber(salesProceed)}</span>
        </Col>
      </Row>

      <Table borderless={true} responsive>
        <thead>
          <tr>
            <th>Net Cash Flow</th>
            <th>Year 1</th>
            <th>Year 3</th>
            <th>Year 5</th>
            <th>Year 10</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Annual</td>
            <td>$34,974</td>
            <td>$76,048</td>
            <td>$45,093</td>
            <td>$39,962</td>
          </tr>
          <tr>
            <td>Monthly</td>
            <td>$34,974</td>
            <td>$76,048</td>
            <td>$45,093</td>
            <td>$39,962</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

TotalReturn.defaultProps = {
  amount: 318710,
  cumNetCashFlow: 320531,
  salesProceed: 539857,
};

export default TotalReturn;
