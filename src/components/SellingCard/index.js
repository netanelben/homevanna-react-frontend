import React from "react";
import "./style.scss";

const SellingCard = ({ price, listPrice }) => {
  return (
    <div className="SellingCard">
      <div className="header flex">
        <span>• For Sale</span>
        <a href="#">Property Inquiry</a>
      </div>

      <span className="type">Initial Investment</span>

      <div className="price-and-links flex">
        <span className="price">${price}</span>
        <div className="links">
          <a href="#">Share</a>
          <a href="#">Add to Cart</a>
          <a href="#">Save</a>
        </div>
      </div>

      <div className="list-price">List Price: ${listPrice}</div>

      <div>
        <input />
      </div>

      <div className="controls">
        <button className="btn-primary">Review Bid</button>
        <button>Buy It Now</button>
      </div>
    </div>
  );
};

SellingCard.defaultProps = {
  price: "318,710",
  listPrice: "314,000",
};

export default SellingCard;
