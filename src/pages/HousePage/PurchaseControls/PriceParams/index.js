import React, { useContext, useState, useEffect } from "react";
import { TabContent, TabPane, Nav, NavItem } from "reactstrap";
import classnames from "classnames";
import Slider from "rc-slider";
import Tooltip from "../../../../components/Tooltip";
import {
  getMinPurchasePrice,
  getMaxPurchasePrice,
} from "../../../../utils/formulas";
import { PageContext, displayNumber } from "../../../../utils";
import {
  MIN_DOWNPAYMENT_VALUE,
  MAX_DOWNPAYMENT_VALUE,
} from "../../../../utils/config";

import "rc-slider/assets/index.css";
import "./style.scss";

const PriceParams = () => {
  const { price, downPayment, purchasePrice } = useContext(PageContext)[0];
  const dispatch = useContext(PageContext)[1];

  const handlePurchasePriceChange = (value) => {
    dispatch({ type: "PURCHASE_PRICE_CHANGE", payload: value });
  };

  const handleDownPaymentChange = (value) => {
    dispatch({ type: "DOWNPAYMENT_CHANGE", payload: value });
  };

  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    handlePurchasePriceChange(price);
  }, [price]);

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
          onChange={handlePurchasePriceChange}
          min={getMinPurchasePrice(price)}
          max={getMaxPurchasePrice(price)}
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
          onChange={handleDownPaymentChange}
          min={MIN_DOWNPAYMENT_VALUE}
          max={MAX_DOWNPAYMENT_VALUE}
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
