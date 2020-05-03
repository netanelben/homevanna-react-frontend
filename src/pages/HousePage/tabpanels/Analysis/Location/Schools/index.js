import React from "react";
import _ from "lodash";
import classnames from "classnames";

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

const Schools = ({ schools }) => (
  <div className="Schools">
    <div className="sub-title">
      Schools
      <a href="#">View Details</a>
    </div>

    {!_.isEmpty(schools.assigned) && (
      <>
        <div className="section-title">Assigned</div>
        <ul>
          {schools.assigned.map((school, key) => (
            <SchoolItem {...school} key={key} />
          ))}
        </ul>
      </>
    )}

    {!_.isEmpty(schools.nearby) && (
      <>
        <div className="section-title">Nearby</div>
        <ul>
          {schools.nearby.map((school, key) => (
            <SchoolItem {...school} key={key} />
          ))}
        </ul>
      </>
    )}
  </div>
);

Schools.defaultProps = {
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

export default Schools;
