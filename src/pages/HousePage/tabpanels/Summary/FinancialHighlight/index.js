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
  getYearlyValues,
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

  const [activeTab, setActiveTab] = useState("1");

  const setYear = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);

    if (tab === "3" || tab === "5") {
      setIsFieldEdit(false);
    } else {
      setIsFieldEdit(true);
    }
  };

  const loanPayments = _.round(
    calcLoanPaymentsValue({ purchasePrice, downPayment, loanInterestRate })
  );

  const {
    yearlyPropertyTaxes,
    yearlyExpectedRent,
    yearlyExpenses,
  } = getYearlyValues(activeTab, { propertyTaxes, expectedRent, expenses });

  const netCashFlow = calcNetCashFlow({
    expectedRent: yearlyExpectedRent,
    expenses: yearlyExpenses,
    propertyTaxes: yearlyPropertyTaxes,
    loanPayments,
  });

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
                {yearlyExpectedRent !== null && !isFieldEdit ? (
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
                {yearlyExpenses !== null && !isFieldEdit ? (
                  <span>-${displayNumber(yearlyExpenses)}</span>
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
