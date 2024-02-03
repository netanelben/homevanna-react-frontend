import React, { useContext } from "react";
import { Row, Col, Container } from "reactstrap";
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
  listingId,
  images = [],
  price,
  bedroomsCount,
  bathroomsCount,
  size,
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

  const goToHousePage = () => {
    window.location.replace(`/listing/${listingId}`);
  };

  return (
    <div className="HouseCard" onClick={goToHousePage}>
      <div className="header" style={{ backgroundImage: `url(${images[0]})` }}>
        <div className="details">
          <div className="price">${displayNumber(price)}</div>
          <div className="info">
            {bedroomsCount && `${bedroomsCount}bds`}
            {bathroomsCount && ` | ${bathroomsCount}ba`}
            {size && ` | ${size} Sq Ft`}
          </div>

          <button className="btn-heart">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </div>

      <Container>
        <Row className="content">
          <Col xs="4">
            <span>Market Rent</span>
            <span>
              <sup>$</sup>
              {displayNumber(price / 10000)}
            </span>
          </Col>
          <Col xs="4">
            <span>Cap Rate</span>
            <span>
              {capRate} <sup>%</sup>
            </span>
          </Col>
          <Col xs="4">
            <span>Total Return</span>
            <span>
              <sup>$</sup>
              {displayNumber(totalReturn)} <i>/ {returnYears} Yr</i>
            </span>
          </Col>
        </Row>
      </Container>

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

export default HouseCard;
