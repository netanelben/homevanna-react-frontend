import React from "react";
import { Row, Col } from "reactstrap";
import Valuation from "./Valuation";
import DiligenceDocuments from "./DiligenceDocuments";
import InspectionHighlights from "./InspectionHighlights";
import LeaseAndTenant from "./LeaseAndTenant";
import Location from "./Location";

const Analysis = () => (
  <>
    <Row>
      <Col sm="12" md="5">
        <Valuation />
      </Col>
      <Col sm="12" md="7">
        <DiligenceDocuments />
      </Col>
    </Row>

    <Row>
      <Col sm="12" md="6">
        <InspectionHighlights />
      </Col>
      <Col sm="12" md="6">
        <LeaseAndTenant />
      </Col>
    </Row>

    <Location />
  </>
);

export default Analysis;
