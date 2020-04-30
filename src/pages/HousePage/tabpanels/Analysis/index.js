import React from "react";
import { Row, Col } from "reactstrap";
import Valuation from "./Valuation";
import DiligenceDocuments from "./DiligenceDocuments";

const Analysis = () => (
  <>
    <Row noGutters>
      <Col sm="5">
        <Valuation />
      </Col>
      <Col sm="7">
        <DiligenceDocuments />
      </Col>
    </Row>
  </>
);

export default Analysis;
