import React from "react";
import BeautyStars from "beauty-stars";

import "./style.scss";

const Meter = ({ value = 0, name, legend = [] }) => {
  const margins =
    value === 0
      ? "0"
      : value < 100
      ? `calc(${value}% - 46px)`
      : `calc(${value}% - 92px)`;
  const style = {
    marginLeft: margins,
  };

  return (
    <li>
      <div className="title">{name}</div>
      <div className="meter-bar">
        <span style={style} />
      </div>
      <div className="legend">
        {legend.map((l) => (
          <span>{l}</span>
        ))}
      </div>
    </li>
  );
};

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
      <Meter
        value={0}
        name="Median Home Value"
        legend={["Lowest", "Mild", "Highest"]}
      />
      <Meter
        value={50}
        name="Median Income"
        legend={["Lowest", "Mild", "Highest"]}
      />
      <Meter
        value={100}
        name="Percent Employed"
        legend={["60%", "80%", "100%"]}
      />
      <Meter
        value={30}
        name="Percent of Owner Occupied Homes"
        legend={["60%", "80%", "100%"]}
      />
      <Meter value={50} name="Average School Rating" legend={[1, 5.5, 10]} />
    </ul>
  </div>
);

Neighborhood.defaultProps = {
  rating: 4,
};

export default Neighborhood;
