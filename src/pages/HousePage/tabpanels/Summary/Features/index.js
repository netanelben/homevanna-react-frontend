import React from "react";
import { Row, Col } from "reactstrap";
import BeautyStars from "beauty-stars";
import EmbeddedMap from "./EmbeddedMap";
import {
  faChartLine,
  faStreetView,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "../../../../../components/Tooltip";
import { displayNumber } from "../../../../../utils";

import "./style.scss";

const Features = ({
  occupancy,
  lotSize,
  leastStart,
  leastEnd,
  HOA,
  floodRisk,
  rating,
  schools,
}) => {
  return (
    <div className="Features card-box">
      <div className="card-title">Features</div>
      <Row>
        <Col sm="6">
          <EmbeddedMap />

          <div className="feature-list flex">
            <div>
              <FontAwesomeIcon icon={faChartLine} />
              <span>Markets</span>
              <a href="#">View Stats</a>
            </div>

            <div className="nh-rating">
              <FontAwesomeIcon icon={faStreetView} />
              <span>Neighborhood</span>
              <BeautyStars
                value={rating}
                editable={false}
                gap={5}
                activeColor="656D72"
                inactiveColor="eee"
              />
            </div>

            <div>
              <FontAwesomeIcon icon={faGraduationCap} />
              <span>Schools</span>
              <div>{schools}</div>
            </div>
          </div>
        </Col>

        <Col sm="6" className="list-with-link">
          <ul className="list">
            <li className="flex">
              <span>Occupancy</span>
              <span>{occupancy}</span>
            </li>
            <li className="flex">
              <span>Lot Size</span>
              <span>{displayNumber(lotSize)}</span>
            </li>
            <li className="flex">
              <span>Least Start</span>
              <span>{leastStart}</span>
            </li>
            <li className="flex">
              <span>Least End</span>
              <span>{leastEnd}</span>
            </li>
            <li className="flex">
              <span>HOA</span>
              <span>{HOA}</span>
            </li>
            <li className="flex">
              <span>Flood Risk</span>
              <Tooltip context="FloodRisk" />
              <span>{floodRisk}</span>
            </li>
          </ul>

          <a href="#">> See more in Analysis</a>
        </Col>
      </Row>
    </div>
  );
};

Features.defaultProps = {
  occupancy: "Occupied",
  lotSize: 6200,
  leastStart: "12/25/2019",
  leastEnd: "12/25/2019",
  HOA: "None",
  floodRisk: "Not Required",
  rating: 3,
  schools: "1 / 3 / 1",
};

export default Features;
