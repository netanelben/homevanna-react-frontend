import React from "react";
import BeautyStars from "beauty-stars";
import "./style.scss";

const HouseCard = ({
  price,
  bedroomsCount,
  bathroomsCount,
  size,
  marketRent,
  capRate,
  totalReturn,
  returnYears,
  address,
  rating,
}) => {
  return (
    <div className="HouseCard">
      <div className="header">
        <div className="details">
          <div className="price">{price}</div>
          <div className="info">
            {bedroomsCount}bds | {bathroomsCount}ba | {size} Sq Ft
          </div>

          <button className="btn-heart">
            <i class="far fa-heart" />
          </button>
        </div>
      </div>

      <div className="content flex">
        <div className="">
          <span>Market Rent</span>
          <span>
            <sup>$</sup>
            {marketRent}
          </span>
        </div>
        <div className="">
          <span>Cap Rate</span>
          <span>
            {capRate} <sup>%</sup>
          </span>
        </div>
        <div className="">
          <span>Total Return</span>
          <span>
            <sup>$</sup>
            {totalReturn} <i>/ {returnYears} Yr</i>
          </span>
        </div>
      </div>

      <div className="footer flex">
        <div className="address">{address}</div>
        <div className="nh-rating">
          Neightborhood:
          <BeautyStars
            value={rating}
            editable={false}
            gap={5}
            inactiveColor="eee"
          />
        </div>
      </div>
    </div>
  );
};

HouseCard.defaultProps = {
  price: "$2,889,000",
  marketRent: "4,302",
  capRate: "8.23",
  totalReturn: "58,874",
  returnYears: "5",
  address: "123 Fale St. Venice, CA, 90210",
  bedroomsCount: 2,
  bathroomsCount: 2,
  size: "567",
  rating: 4.5,
};

export default HouseCard;
