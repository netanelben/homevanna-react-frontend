import React from "react";
import { Row, Col } from "reactstrap";
import "./style.scss";

const STATUS_LABELS = ["N/A", "Functional", "Needs Repairs"];

const InspectionItem = ({ name, status = 0 }) => {
  const statusBadgeClassname = `status-badge status-${status}`;

  return (
    <div className="inspection-item">
      <div className="name">{name}</div>
      <div className="status-label">
        <i className={statusBadgeClassname} />
        {STATUS_LABELS[status]}
      </div>
    </div>
  );
};

const InspectionHighlights = ({ inspectionList }) => (
  <div className="InspectionHighlights card-box">
    <div className="card-title">Inspection Highlights</div>

    <Row className="list">
      {inspectionList.map(({ name, status = 0 }, key) => {
        return (
          <Col xs="6" sm="4" key={key}>
            <InspectionItem name={name} status={status} />
          </Col>
        );
      })}
    </Row>

    <div className="bottom-link">
      View <a href="#">Inspection Report</a>
    </div>
  </div>
);

InspectionHighlights.defaultProps = {
  inspectionList: [
    {
      name: "Roof",
      status: 0,
    },
    {
      name: "Attic",
      status: 0,
    },
    {
      name: "Bedrooms",
      status: 1,
    },
    {
      name: "Basement/Crawl",
      status: 0,
    },
    {
      name: "HVAC",
      status: 0,
    },
    {
      name: "Bedrooms",
      status: 1,
    },
    {
      name: "Electrical",
      status: 0,
    },
    {
      name: "Exterior",
      status: 2,
    },
    {
      name: "Garage",
      status: 0,
    },
    {
      name: "Plumbing",
      status: 0,
    },
    {
      name: "Landscaping",
      status: 0,
    },
    {
      name: "Structural",
      status: 1,
    },
    {
      name: "Kitchen",
      status: 1,
    },
  ],
};

export default InspectionHighlights;
