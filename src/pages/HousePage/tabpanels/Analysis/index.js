import React from "react";
import { Row, Col } from "reactstrap";
import Valuation from "./Valuation";
import DiligenceDocuments from "./DiligenceDocuments";
import InspectionHighlights from "./InspectionHighlights";
import LeaseAndTenant from "./LeaseAndTenant";

const Analysis = () => (
  <>
    <Row noGutters>
      <Col sm="12" md="5">
        <Valuation />
      </Col>
      <Col sm="12" md="7">
        <DiligenceDocuments />
      </Col>
    </Row>

    <Row noGutters>
      <Col sm="12" md="6">
        <InspectionHighlights />
      </Col>
      <Col sm="12" md="6">
        <LeaseAndTenant />
      </Col>
    </Row>
  </>
);

export default Analysis;
