import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem } from "reactstrap";
import classnames from "classnames";
import Slider from "rc-slider";

import "./style.scss";

const MIN_PURCHASE_PRICE = 100000;
const MAX_PURCHASE_PRICE = 500000;

const PriceParams = () => {
  const [purchasePrice, setPurchasePrice] = useState(314000);
  const [downPayment, setDownPayment] = useState(80);

  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="PriceParams">
      <div className="section">
        <div className="title flex">
          Purchase Price
          <span>${purchasePrice}</span>
        </div>
        <Slider
          value={purchasePrice}
          onChange={setPurchasePrice}
          min={MIN_PURCHASE_PRICE}
          max={MAX_PURCHASE_PRICE}
        />
      </div>
      <div className="section">
        <div className="title flex">
          Down Payment
          <span>{downPayment}%</span>
        </div>
        <Slider
          value={downPayment}
          onChange={setDownPayment}
          min={0}
          max={100}
        />
      </div>
      <div className="section">
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="title flex">
              Rent
              <span>$2,400</span>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="title flex">
              Rent
              <span>$2,300</span>
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div className="title flex">
              Rent
              <span>$1,400</span>
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
            Current
          </NavItem>
          <NavItem
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Market
          </NavItem>
          <NavItem
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Custom
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default PriceParams;
