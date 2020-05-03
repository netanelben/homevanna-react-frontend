import React from "react";
import _ from "lodash";
import classnames from "classnames";
import { Row, Col } from "reactstrap";

import "./style.scss";

const SchoolItem = ({ rank = 0, name, description }) => {
  const className = classnames("rank-badge", { "no-rank": rank === 0 });

  return (
    <li>
      <div className={className}>{rank === 0 ? "N/R" : rank}</div>
      <div>
        <span>{name}</span>
        <span>{description}</span>
      </div>
    </li>
  );
};

const Location = ({ schools }) => (
  <div className="Location card-box">
    <div className="card-title">Location</div>
    <Row>
      <Col md="4">
        <div className="sub-title">
          Houston
          <a href="#">See more data</a>
        </div>
      </Col>

      <Col md="4">
        <div className="sub-title">
          Neighborhood
          <a href="#">Learn more</a>
        </div>
      </Col>

      <Col md="4">
        <div className="sub-title">
          Schools
          <a href="#">View Details</a>
        </div>

        {!_.isEmpty(schools.assigned) && (
          <>
            <div className="section-title">Assigned</div>
            <ul>
              {schools.assigned.map((school) => (
                <SchoolItem {...school} />
              ))}
            </ul>
          </>
        )}

        {!_.isEmpty(schools.nearby) && (
          <>
            <div className="section-title">Nearby</div>
            <ul>
              {schools.nearby.map((school) => (
                <SchoolItem {...school} />
              ))}
            </ul>
          </>
        )}
      </Col>
    </Row>
  </div>
);

Location.defaultProps = {
  schools: {
    assigned: [
      {
        rank: 8,
        name: "Conroe High School",
        description: "Public - Grades 9 - 12",
      },
      {
        rank: 7,
        name: "Peet J High School",
        description: "Public - Grades 9 - 12",
      },
      {
        rank: 7,
        name: "Conroe Band Elementary School",
        description: "Public - Grades PK - 6",
      },
    ],
    nearby: [
      {
        name: "St. James Episcopal School",
        description: "Public - Grades 9 - 12",
      },
      {
        name: "The Rubicon Academy",
        description: "Private - Grades 7 - 8",
      },
    ],
  },
};

export default Location;
