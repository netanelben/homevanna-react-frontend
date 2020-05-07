import React, { useContext, useState } from "react";
import Slider from "rc-slider";
import Tooltip from "../../../../../components/Tooltip";
import { PageContext, displayNumber } from "../../../../../utils";

import "rc-slider/assets/index.css";
import "./style.scss";

const MIN_PURCHASE_PRICE = 100000;
const MAX_PURCHASE_PRICE = 500000;

const InitialInvestment = ({ amount }) => {
  const { estImmediateCosts } = useContext(PageContext)[0];
  const dispatch = useContext(PageContext)[1];

  const [purchasePrice, setPurchasePrice] = useState(314000);
  const [downPayment, setDownPayment] = useState(100);
  const [loanInterestRate, setLoanInterestRate] = useState(4.75);
  const [closingCosts, setClosingCosts] = useState(1.5);
  // const [estImmediateCosts, setEstImmediateCosts] = useState(784);

  const handleImmediateCostChange = (value) => {
    // setEstImmediateCosts(value);
    dispatch({ type: "IMMEDIATE_COST_CHANGE", payload: value });
  };

  return (
    <div className="InitialInvestment card-box">
      <div className="title">
        Initial Investment
        <Tooltip context="InitialInvestment" />
      </div>

      <div className="price-large">${displayNumber(amount)}</div>

      <div className="section">
        <div className="flex">
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
        <div className="flex">
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
        <div className="flex">
          Loan Interest Rate
          <Tooltip context="LoanInterestRate" />
          <span>{loanInterestRate}%</span>
        </div>
        <Slider
          value={loanInterestRate}
          onChange={setLoanInterestRate}
          min={0}
          max={10}
        />
      </div>

      <div className="section">
        <div className="flex">
          Closing Costs
          <Tooltip context="ClosingCosts" />
          <span>${closingCosts}%</span>
        </div>
        <Slider
          value={closingCosts}
          onChange={setClosingCosts}
          min={0}
          max={10}
        />
      </div>

      <div className="section">
        <div className="flex">
          Est. Immediate Costs
          <Tooltip context="EstImmediateCosts" />
          <span>${displayNumber(estImmediateCosts)}</span>
        </div>
        <Slider
          value={estImmediateCosts}
          onChange={handleImmediateCostChange}
          min={0}
          max={10000}
        />
      </div>
    </div>
  );
};

InitialInvestment.defaultProps = {
  amount: 643082,
};

export default InitialInvestment;
