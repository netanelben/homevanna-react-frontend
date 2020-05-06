import React from "react";
import { Row, Col } from "reactstrap";
import FinancialHighlight from "./FinancialHighlight";
import Features from "./Features";
import PropertyCharacteristics from "./PropertyCharacteristics";

const Summary = () => (
  <>
    <Row className="narrow-gutter">
      <Col md="12" lg="8">
        <Features />
      </Col>
      <Col md="12" lg="4">
        <FinancialHighlight />
      </Col>
    </Row>

    <PropertyCharacteristics />
  </>
);

export default Summary;
