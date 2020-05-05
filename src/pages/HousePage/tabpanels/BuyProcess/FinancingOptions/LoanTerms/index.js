import React, { useState } from "react";
import {
  Table,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

import "./style.scss";

const LoanTerms = ({ loadCompanyList }) => {
  const [dropdownTermsOpen, setDropdownTermsOpen] = useState(false);

  const toggleTerms = () => setDropdownTermsOpen((prevState) => !prevState);

  return (
    <div className="LoanTerms">
      <div className="sub-title">Loan Terms</div>
      <Dropdown isOpen={dropdownTermsOpen} toggle={toggleTerms}>
        <DropdownToggle caret>30 year fixed</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Another option</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Table borderless={true} responsive>
        <thead>
          <tr>
            <th></th>
            <th>Rate</th>
            <th>Payment</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {loadCompanyList.map(({ logoUrl, rate, payment, fees, apr }, key) => (
            <tr key={key}>
              <td className="td-logo">
                <div
                  className="company-logo"
                  style={{ backgroundImage: `url(${logoUrl})` }}
                />
              </td>
              <td align="right">
                {rate}%
                <div className="text-small">
                  Fees: ${fees}
                  <br />
                  APR: {apr}%
                </div>
              </td>
              <td align="right">${payment}</td>
              <td align="right">
                <Button>Get Pre-Approved</Button>
              </td>
              <td>
                <a href="#">Details</a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="bottom-statement">
        Fees represent the loan origination fees charged directly by the lender.
        Other fees may apply.
      </div>
    </div>
  );
};

LoanTerms.defaultProps = {
  loadCompanyList: [
    {
      logoUrl: "",
      rate: 4.25,
      payment: "1,457",
      fees: "1,795",
      apr: 4.28,
    },
    {
      logoUrl: "",
      rate: 4.875,
      payment: "1,568",
      fees: "0",
      apr: 4.875,
    },
  ],
};

export default LoanTerms;
