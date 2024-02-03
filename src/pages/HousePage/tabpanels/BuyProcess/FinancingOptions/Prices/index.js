import React, { useContext, useState } from "react";
import {
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { PageContext, displayNumber } from "../../../../../../utils";

import "./style.scss";

const Prices = () => {
  const { price } = useContext(PageContext)[0];

  const [dropdownPaymentOpen, setDropdownPaymentOpen] = useState(false);
  const [dropdownScoreOpen, setDropdownScoreOpen] = useState(false);

  const togglePayment = () => setDropdownPaymentOpen((prevState) => !prevState);
  const toggleScore = () => setDropdownScoreOpen((prevState) => !prevState);

  return (
    <div className="Prices">
      <div className="section">
        <div className="sub-title">Property Price</div>
        <Input placeholder={`$${displayNumber(price)}`} />
      </div>

      <div className="section">
        <div className="sub-title">Down Payment</div>
        <Dropdown isOpen={dropdownPaymentOpen} toggle={togglePayment}>
          <DropdownToggle caret>25%</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Another option</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="section">
        <div className="sub-title">Credit Score</div>
        <Dropdown isOpen={dropdownScoreOpen} toggle={toggleScore}>
          <DropdownToggle caret>740+ - Excellent</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Another option</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="bottom-statement">
        <a href="#">Connect with an Advisor</a>&nbsp; to learn more or visit our
        partner to get pre-approved.
      </div>
    </div>
  );
};

export default Prices;
