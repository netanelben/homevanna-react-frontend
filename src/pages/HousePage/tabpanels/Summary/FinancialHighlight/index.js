import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Input, TabContent, TabPane, Nav, NavItem } from "reactstrap";
import _ from "lodash";
import classnames from "classnames";
import Tooltip from "../../../../../components/Tooltip";
import { PageContext, displayNumber } from "../../../../../utils";
import {
  calcLoanPaymentsValue,
  getYearlyFinancialValues,
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
    netCashFlow,
  } = useContext(PageContext)[0];
  const dispatch = useContext(PageContext)[1];

  const handleExpectedRentChange = ({ target }) => {
    dispatch({ type: "EXPECTED_RENT_CHANGE", payload: target.value });
    setNetCashFlow();
  };

  const handleExpensesChange = ({ target }) => {
    dispatch({ type: "EXPENSES_CHANGE", payload: target.value });
    setNetCashFlow();
  };

  const setNetCashFlow = () => dispatch({ type: "SET_NET_CASH_FLOW" });

  const [activeTab, setActiveTab] = useState("1");

  const setYear = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const loanPayments = _.round(
    calcLoanPaymentsValue({ purchasePrice, downPayment, loanInterestRate })
  );

  const {
    yearlyPropertyTaxes,
    yearlyExpectedRent,
    yearlyExpenses,
  } = getYearlyFinancialValues(activeTab, {
    propertyTaxes,
    expectedRent,
    expenses,
  });

  const { yearOne, yearThree, yearFive } = netCashFlow;
  const netCashFlowObj = {
    1: yearOne,
    3: yearThree,
    5: yearFive,
  };
  const yearlyNetCashFlow = netCashFlowObj[activeTab];

  return (
    <div className="FinancialHighlight card-box">
      <div className="card-title">Annual Financial Highlight</div>
      <Nav tabs justified>
        <NavItem
          className={classnames({ active: activeTab === "1" })}
          onClick={() => {
            setYear("1");
          }}
        >
          Year 1
        </NavItem>
        <NavItem
          className={classnames({ active: activeTab === "3" })}
          onClick={() => {
            setYear("3");
          }}
        >
          Year 3
        </NavItem>
        <NavItem
          className={classnames({ active: activeTab === "5" })}
          onClick={() => {
            setYear("5");
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
                {activeTab !== "1" ? (
                  <span>${displayNumber(yearlyExpectedRent)}</span>
                ) : (
                  <span className="input-wrapper">
                    <Input
                      min="0"
                      placeholder="0"
                      defaultValue={yearlyExpectedRent}
                      type="number"
                      onChange={handleExpectedRentChange}
                    />
                  </span>
                )}
              </li>

              <li className="flex">
                <span>Expenses</span>
                <Tooltip context="Expenses" />
                {activeTab !== "1" ? (
                  <span>
                    {yearlyExpenses
                      ? `-$${displayNumber(yearlyExpenses)}`
                      : "$0"}
                  </span>
                ) : (
                  <span className="input-wrapper">
                    <Input
                      min="0"
                      placeholder="0"
                      defaultValue={yearlyExpenses}
                      type="number"
                      onChange={handleExpensesChange}
                    />
                  </span>
                )}
              </li>

              <li className="flex">
                <span>Property Taxes</span>
                <Tooltip context="PropertyTaxes" />
                <span>${displayNumber(yearlyPropertyTaxes)}</span>
              </li>

              <li className="flex">
                <span>Loan Payments</span>
                <Tooltip context="LoanPayments" />
                <span>${displayNumber(loanPayments)}</span>
              </li>

              <li className="flex">
                <span>Net Cash Flow</span>
                <Tooltip context="NetCashFlow" />
                <span>${displayNumber(yearlyNetCashFlow)}</span>
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
