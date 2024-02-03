import React from "react";
import { Row, Col } from "reactstrap";
import Valuation from "./Valuation";
import DiligenceDocuments from "./DiligenceDocuments";
import InspectionHighlights from "./InspectionHighlights";
import LeaseAndTenant from "./LeaseAndTenant";
import Location from "./Location";

const Analysis = () => (
  <>
    <Row className="narrow-gutter">
      <Col sm="12" md="12" lg="5">
        <Valuation />
      </Col>
      <Col sm="12" md="12" lg="7">
        <DiligenceDocuments />
      </Col>
    </Row>

    <Row className="narrow-gutter">
      <Col md="12" lg="6">
        <InspectionHighlights />
      </Col>
      <Col md="12" lg="6">
        <LeaseAndTenant />
      </Col>
    </Row>

    <Location />
  </>
);

export default Analysis;
