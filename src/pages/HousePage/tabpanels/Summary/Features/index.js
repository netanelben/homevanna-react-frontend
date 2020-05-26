import React, { useContext } from "react";
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
import { PageContext, displayNumber } from "../../../../../utils";

import "./style.scss";

const Features = ({ rating, schools }) => {
  const { size, hoaFee, occupancy, leaseTerm, floodRisk } = useContext(
    PageContext
  )[0];
  const leaseStart = leaseTerm || "---";
  const leaseEnd = leaseTerm || "---";

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
              <span>{displayNumber(size)}</span>
            </li>
            <li className="flex">
              <span>Lease Start</span>
              <span>{leaseStart}</span>
            </li>
            <li className="flex">
              <span>Lease End</span>
              <span>{leaseEnd}</span>
            </li>
            <li className="flex">
              <span>HOA</span>
              <span>{hoaFee ? hoaFee : "None"}</span>
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
  rating: 3,
  schools: "1 / 3 / 1",
};

export default Features;
