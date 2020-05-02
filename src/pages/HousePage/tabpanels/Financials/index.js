import React from "react";
import { Row, Col } from "reactstrap";
import GrossYield from "./GrossYield";
import InitialInvestment from "./InitialInvestment";
import TotalReturn from "./TotalReturn";
import InvestmentValue from "./InvestmentValue";

const Financials = () => (
  <>
    <GrossYield />

    <Row noGutters>
      <Col sm="12" md="4">
        <InitialInvestment />
      </Col>
      <Col sm="12" md="8">
        <TotalReturn />
      </Col>
    </Row>

    <InvestmentValue />
  </>
);

export default Financials;
