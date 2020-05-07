import React, { useContext, useState } from "react";
import { TabContent, TabPane, Nav, NavItem } from "reactstrap";
import classnames from "classnames";
import Slider from "rc-slider";
import Tooltip from "../../../../components/Tooltip";
import { PageContext, displayNumber } from "../../../../utils";

import "rc-slider/assets/index.css";
import "./style.scss";

const PriceParams = () => {
  const { price } = useContext(PageContext)[0];

  const MIN_PURCHASE_PRICE = price * 0.5;
  const MAX_PURCHASE_PRICE = price * 1.5;

  const [purchasePrice, setPurchasePrice] = useState(MIN_PURCHASE_PRICE);
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
          <Tooltip context="PurchasePrice" />
          <span>${displayNumber(purchasePrice)}</span>
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
          <Tooltip context="DownPayment" />
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
        <TabContent>
          <TabPane>
            <div className="title flex">
              Rent
              <Tooltip context="Rent" />
              <span>${displayNumber(2400)}</span>
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
