import React, { useContext } from "react";
import _ from "lodash";
import classnames from "classnames";
import { PageContext } from "../../../../../../utils";

import "./style.scss";

const schoolGrades = {
  high: "Grades 9 - 12",
  middle: "Grades 7 - 9",
  elementary: "Grades 1 - 6",
};

const SchoolItem = ({ rating = 0, name, grade }) => {
  const className = classnames("rank-badge", { "no-rank": rating === 0 });

  return (
    <li>
      <div className={className}>{rating === 0 ? "N/R" : rating}</div>
      <div>
        <span>{name}</span>
        <span>{schoolGrades[grade]}</span>
      </div>
    </li>
  );
};

const Schools = () => {
  const { schools } = useContext(PageContext)[0];
  const schoolList = _.flatMap(schools, (school, grade) => ({
    ...school,
    grade,
  }));

  return (
    <div className="Schools">
      <div className="sub-title">
        Schools
        <a href="#">View Details</a>
      </div>

      <div className="section-title">Assigned</div>
      <ul>
        {schoolList.map((school, key) => (
          <SchoolItem {...school} key={key} />
        ))}
      </ul>

      <div className="section-title">Nearby</div>
      <ul>
        {schoolList.map((school, key) => (
          <SchoolItem {...school} key={key} />
        ))}
      </ul>
    </div>
  );
};

export default Schools;
