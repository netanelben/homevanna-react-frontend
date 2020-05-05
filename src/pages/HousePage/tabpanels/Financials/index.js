import React from "react";
import { Row, Col } from "reactstrap";
import GrossYield from "./GrossYield";
import InitialInvestment from "./InitialInvestment";
import TotalReturn from "./TotalReturn";
import InvestmentValue from "./InvestmentValue";

const Financials = () => (
  <>
    <GrossYield />

    <Row className="narrow-gutter">
      <Col md="12" lg="4">
        <InitialInvestment />
      </Col>
      <Col md="12" lg="8">
        <TotalReturn />
      </Col>
    </Row>

    <InvestmentValue />
  </>
);

export default Financials;
