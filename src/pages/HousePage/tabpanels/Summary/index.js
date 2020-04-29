import React from "react";
import { Row, Col } from "reactstrap";
import FinancialHighlight from "../../../../components/FinancialHighlight";
import Features from "../../../../components/Features";
import PropertyCharacteristics from "../../../../components/PropertyCharacteristics";

const Summary = () => (
  <>
    <Row noGutters>
      <Col sm="8">
        <Features />
      </Col>
      <Col sm="4">
        <FinancialHighlight />
      </Col>
    </Row>
    <Row>
      <Col sm="12">
        <PropertyCharacteristics />
      </Col>
    </Row>
  </>
);

export default Summary;
