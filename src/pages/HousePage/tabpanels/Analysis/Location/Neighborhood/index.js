import React from "react";
import BeautyStars from "beauty-stars";

import "./style.scss";

const Meter = ({ name }) => (
  <li>
    <div className="title">{name}</div>
    <div className="meter-bar">
      <span />
    </div>
    <div className="legend">
      <span>Lowest</span>
      <span>Mild</span>
      <span>Highest</span>
    </div>
  </li>
);

const Neighborhood = ({ rating }) => (
  <div className="Neighborhood">
    <div className="sub-title">
      Neighborhood
      <a href="#">Learn more</a>
    </div>

    <div className="nh-rating">
      <BeautyStars
        value={rating}
        editable={false}
        gap={5}
        activeColor="FF9900"
        inactiveColor="eee"
      />
    </div>

    <ul className="meter-list">
      <Meter name="Median Home Value" />
      <Meter name="Median Income" />
      <Meter name="Percent Employed" />
      <Meter name="Percent of Owner Occupied Homes" />
      <Meter name="Average School Rating" />
    </ul>
  </div>
);

Neighborhood.defaultProps = {
  rating: 3,
};

export default Neighborhood;
