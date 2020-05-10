import React, { useContext } from "react";
import Slider from "rc-slider";
import Tooltip from "../../../../../components/Tooltip";
import {
  getMinPurchasePrice,
  getMaxPurchasePrice,
  calcInvestmentPrice,
} from "../../../../../utils/formulas";
import { PageContext, displayNumber } from "../../../../../utils";
import {
  MIN_DOWNPAYMENT_VALUE,
  MAX_DOWNPAYMENT_VALUE,
  MIN_LOAN_INTEREST_RATE,
  MAX_LOAN_INTEREST_RATE,
} from "../../../../../utils/config";

import "rc-slider/assets/index.css";
import "./style.scss";

const MIN_CLOSING_COST_RATE = 0;
const MAX_CLOSING_COST_RATE = 6;

const MIN_EST_IMMEDIATE_COSTS_VALUE = 0;
const MAX_EST_IMMEDIATE_COSTS_VALUE = 50000;

const InitialInvestment = () => {
  const {
    price,
    estImmediateCosts,
    downPayment,
    purchasePrice,
    closingCosts,
    loanInterestRate,
  } = useContext(PageContext)[0];
  const dispatch = useContext(PageContext)[1];

  const totalInitialInvestment = calcInvestmentPrice({
    purchasePrice,
    downPayment,
    closingCosts,
    estImmediateCosts,
  });

  const handlePurchasePriceChange = (value) => {
    dispatch({ type: "PURCHASE_PRICE_CHANGE", payload: value });
  };

  const handleImmediateCostChange = (value) => {
    dispatch({ type: "IMMEDIATE_COST_CHANGE", payload: value });
  };

  const handleDownPaymentChange = (value) => {
    dispatch({ type: "DOWNPAYMENT_CHANGE", payload: value });
  };

  const handleLoanInterestRateChange = (value) => {
    dispatch({ type: "LOAN_INTEREST_RATE_CHANGE", payload: value });
  };

  const handleClosingCostChange = (value) => {
    dispatch({ type: "CLOSING_COST_RATE_CHANGE", payload: value });
  };

  return (
    <div className="InitialInvestment card-box">
      <div className="title">
        Initial Investment
        <Tooltip context="InitialInvestment" />
      </div>

      <div className="price-large">
        ${displayNumber(totalInitialInvestment)}
      </div>

      <div className="section">
        <div className="flex">
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
        <div className="flex">
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
        <div className="flex">
          Loan Interest Rate
          <Tooltip context="LoanInterestRate" />
          <span>{loanInterestRate}%</span>
        </div>
        <Slider
          step={0.25}
          value={loanInterestRate}
          onChange={handleLoanInterestRateChange}
          min={MIN_LOAN_INTEREST_RATE}
          max={MAX_LOAN_INTEREST_RATE}
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
          onChange={handleClosingCostChange}
          min={MIN_CLOSING_COST_RATE}
          max={MAX_CLOSING_COST_RATE}
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
          min={MIN_EST_IMMEDIATE_COSTS_VALUE}
          max={MAX_EST_IMMEDIATE_COSTS_VALUE}
        />
      </div>
    </div>
  );
};

export default InitialInvestment;
