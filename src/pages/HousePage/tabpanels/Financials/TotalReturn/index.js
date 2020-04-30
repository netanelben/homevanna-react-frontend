import React, { useState } from "react";
import { Row, Col, TabContent, TabPane, Nav, NavItem, Table } from "reactstrap";
import classnames from "classnames";

import "./style.scss";

const TotalReturn = ({ amount, appreciation }) => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="TotalReturn card-box">
      <Row noGutters>
        <Col sm="6">
          <div className="title">TOTAL RETURN</div>
          <div className="price-large">${amount}</div>
        </Col>

        <Col sm="6">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <div className="title flex">
                Appreciation
                <span>{appreciation}%</span>
              </div>
            </TabPane>
            <TabPane tabId="2">
              <div className="title flex">
                Appreciation
                <span>$368,760</span>
              </div>
            </TabPane>
            <TabPane tabId="3">
              <div className="title flex">
                Appreciation
                <span>$468,760</span>
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
              className={classnames({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              Custom
            </NavItem>
          </Nav>
        </Col>
      </Row>

      <div className="cash-info flex">
        <span>Cum Net Cash Flow</span>
        <span className="text-large">$320,531</span>
        <span>Sales Proceed</span>
        <span className="text-large">$539,857</span>
      </div>

      <Table borderless={true}>
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
            <td>Annual</td>
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
  amount: "318,710",
  appreciation: "4.4",
};

export default TotalReturn;
