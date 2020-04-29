import React, { useState } from "react";
import Slider from "rc-slider";

import "./style.scss";

const MIN_PURCHASE_PRICE = 100000;
const MAX_PURCHASE_PRICE = 500000;

const InitialInvestment = ({ amount }) => {
  const [purchasePrice, setPurchasePrice] = useState(314000);
  const [downPayment, setDownPayment] = useState(100);
  const [loanInterestRate, setLoanInterestRate] = useState(4.75);
  const [closingCosts, setClosingCosts] = useState(1.5);
  const [estImmediateCosts, setEstImmediateCosts] = useState(784);

  return (
    <div className="InitialInvestment">
      <div className="title">Initial Investment</div>

      <div className="price-large">${amount}</div>

      <div className="section">
        <div className="flex">
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
        <div className="flex">
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
        <div className="flex">
          Loan Interest Rate
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
          <span>${estImmediateCosts}</span>
        </div>
        <Slider
          value={estImmediateCosts}
          onChange={setEstImmediateCosts}
          min={0}
          max={10000}
        />
      </div>
    </div>
  );
};

InitialInvestment.defaultProps = {
  amount: "643,082",
};

export default InitialInvestment;
