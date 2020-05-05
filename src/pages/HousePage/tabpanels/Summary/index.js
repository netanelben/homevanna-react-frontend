import React from "react";
import { Row, Col } from "reactstrap";
import FinancialHighlight from "../../../../components/FinancialHighlight";
import Features from "../../../../components/Features";
import PropertyCharacteristics from "../../../../components/PropertyCharacteristics";

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
