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

const InspectionHighlights = () => (
  <div className="InspectionHighlights card-box">
    <div className="card-title">Inspection Highlights</div>

    <Row noGutters>
      <Col sm="4">
        <InspectionItem name="Roof" status={1} />
      </Col>
      <Col sm="4">
        <InspectionItem name="Attic" status={1} />
      </Col>
      <Col sm="4">
        <InspectionItem name="Bedrooms" status={2} />
      </Col>
    </Row>

    <Row noGutters>
      <Col sm="4">
        <InspectionItem name="Roof" status={0} />
      </Col>
      <Col sm="4">
        <InspectionItem name="Attic" status={1} />
      </Col>
      <Col sm="4">
        <InspectionItem name="Bedrooms" status={1} />
      </Col>
    </Row>

    <div className="bottom-link">
      View <a href="#">Inspection Report</a>
    </div>
  </div>
);

export default InspectionHighlights;
