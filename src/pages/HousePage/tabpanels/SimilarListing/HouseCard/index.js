import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import BeautyStars from "beauty-stars";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageContext, displayNumber } from "../../../../../utils";
import {
  calcCapRate,
  calcLoanPaymentsValue,
} from "../../../../../utils/formulas";

import "./style.scss";

const HouseCard = ({
  houseImageUrl,
  price,
  bedroomsCount,
  bathroomsCount,
  size,
  marketRent,
  returnYears,
  address,
  rating,
}) => {
  const {
    totalReturn,
    expectedRent,
    expenses,
    propertyTaxes,
    purchasePrice,
    downPayment,
    loanInterestRate,
  } = useContext(PageContext)[0];

  const loanPayments = calcLoanPaymentsValue({
    purchasePrice,
    downPayment,
    loanInterestRate,
  });

  const capRate = calcCapRate({
    expectedRent,
    expenses,
    propertyTaxes,
    purchasePrice,
    loanPayments,
  });

  return (
    <div className="HouseCard">
      <div
        className="header"
        style={{ backgroundImage: `url(${houseImageUrl})` }}
      >
        <div className="details">
          <div className="price">${displayNumber(price)}</div>
          <div className="info">
            {bedroomsCount}bds | {bathroomsCount}ba | {size} Sq Ft
          </div>

          <button className="btn-heart">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </div>

      <Row className="content">
        <Col xs="4">
          <span>Market Rent</span>
          <span>
            <sup>$</sup>
            {displayNumber(marketRent)}
          </span>
        </Col>
        <Col xs="3">
          <span>Cap Rate</span>
          <span>
            {capRate} <sup>%</sup>
          </span>
        </Col>
        <Col xs="5">
          <span>Total Return</span>
          <span>
            <sup>$</sup>
            {displayNumber(totalReturn)} <i>/ {returnYears} Yr</i>
          </span>
        </Col>
      </Row>

      <div className="footer flex">
        <div className="address">{address}</div>
        <div className="nh-rating">
          Neightborhood:
          <BeautyStars
            value={rating}
            editable={false}
            gap={5}
            activeColor="FF9900"
            inactiveColor="eee"
          />
        </div>
      </div>
    </div>
  );
};

HouseCard.defaultProps = {
  price: 2889000,
  marketRent: 4302,
  capRate: "8.23",
  totalReturn: 58874,
  returnYears: "5",
  address: "123 Fale St. Venice, CA, 90210",
  bedroomsCount: 2,
  bathroomsCount: 2,
  size: "567",
  rating: 4.5,
};

export default HouseCard;
