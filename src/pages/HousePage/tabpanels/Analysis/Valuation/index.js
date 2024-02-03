import React, { useContext } from "react";
import { PageContext, displayNumber } from "../../../../../utils";
import { calcValuation } from "../../../../../utils/formulas";

import "./style.scss";

const Valuation = ({ valuationData = null }) => {
  const { price } = useContext(PageContext)[0];

  const { high, low } = calcValuation({ price });

  return (
    <div className="Valuation card-box">
      <div className="card-title">Valuation</div>
      <div className="prop-value">Property Value</div>
      <div className="price-large">
        ${displayNumber(low)} - ${displayNumber(high)}
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
};

export default Valuation;
