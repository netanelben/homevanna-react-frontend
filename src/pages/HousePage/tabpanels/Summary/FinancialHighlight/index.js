import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Input, TabContent, TabPane, Nav, NavItem } from "reactstrap";
import _ from "lodash";
import classnames from "classnames";
import Tooltip from "../../../../../components/Tooltip";
import { PageContext, displayNumber } from "../../../../../utils";
import {
  calcLoanPaymentsValue,
  calcNetCashFlow,
} from "../../../../../utils/formulas";

import "./style.scss";

const FinancialHighlight = () => {
  const {
    expectedRent,
    expenses,
    propertyTaxes,
    purchasePrice,
    downPayment,
    loanInterestRate,
  } = useContext(PageContext)[0];
  const dispatch = useContext(PageContext)[1];

  const [isFieldEdit, setIsFieldEdit] = useState(false);

  const handleExpectedRentChange = ({ target }) => {
    setIsFieldEdit(true);
    dispatch({ type: "EXPECTED_RENT_CHANGE", payload: target.value });
  };

  const handleExpensesChange = ({ target }) => {
    setIsFieldEdit(true);
    dispatch({ type: "EXPENSES_CHANGE", payload: target.value });
  };

  const loanPayments = _.round(
    calcLoanPaymentsValue({ purchasePrice, downPayment, loanInterestRate })
  );

  const netCashFlow = calcNetCashFlow({
    expectedRent,
    expenses,
    propertyTaxes,
    loanPayments,
  });

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="FinancialHighlight card-box">
      <div className="card-title">Annual Financial Highlight</div>
      <Nav tabs justified>
        <NavItem
          className={classnames({ active: activeTab === "1" })}
          onClick={() => {
            toggle("1");
          }}
        >
          Year 1
        </NavItem>
        <NavItem
          className={classnames({ active: activeTab === "2" })}
          onClick={() => {
            toggle("2");
          }}
        >
          Year 3
        </NavItem>
        <NavItem
          className={classnames({ active: activeTab === "3" })}
          onClick={() => {
            toggle("3");
          }}
        >
          Year 5
        </NavItem>
      </Nav>
      <TabContent>
        <TabPane>
          <div className="list-with-link">
            <ul className="list">
              <li className="flex">
                <span>Expected Rent</span>
                <Tooltip context="ExpectedRent" />
                {expectedRent !== null && !isFieldEdit ? (
                  <span>${displayNumber(expectedRent)}</span>
                ) : (
                  <span className="input-wrapper">
                    <Input
                      placeholder="0"
                      defaultValue={expectedRent}
                      type="number"
                      onChange={handleExpectedRentChange}
                    />
                  </span>
                )}
              </li>

              <li className="flex">
                <span>Expenses</span>
                <Tooltip context="Expenses" />
                {expenses !== null && !isFieldEdit ? (
                  <span>-${displayNumber(expenses)}</span>
                ) : (
                  <span className="input-wrapper">
                    <Input
                      placeholder="0"
                      defaultValue={expenses}
                      type="number"
                      onChange={handleExpensesChange}
                    />
                  </span>
                )}
              </li>

              <li className="flex">
                <span>Property Taxes</span>
                <Tooltip context="PropertyTaxes" />
                <span>${displayNumber(propertyTaxes)}</span>
              </li>

              <li className="flex">
                <span>Loan Payments</span>
                <Tooltip context="LoanPayments" />
                <span>${displayNumber(loanPayments)}</span>
              </li>

              <li className="flex">
                <span>Net Cash Flow</span>
                <Tooltip context="NetCashFlow" />
                <span>${displayNumber(netCashFlow)}</span>
              </li>
            </ul>

            <Link to="/financials"> &#62; See more in Financials</Link>
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default FinancialHighlight;
