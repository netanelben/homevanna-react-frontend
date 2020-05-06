import React from "react";
import { displayNumber } from "../../../../../utils";

import "./style.scss";

const Valuation = ({ valuationData = null }) => (
  <div className="Valuation card-box">
    <div className="card-title">Valuation</div>
    <div className="prop-value">Property Value</div>
    <div className="price-large">
      ${displayNumber(318710)} - ${displayNumber(420000)}
    </div>
    <div className="rental-value">Rental Value</div>

    <div className="value-date">
      {!valuationData && "Valuation Data is not available"}
    </div>

    <div className="see-more">
      See more in
      <a href="#">Property Valuation Report</a>
    </div>
  </div>
);

export default Valuation;
