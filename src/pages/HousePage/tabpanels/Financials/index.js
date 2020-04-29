import React from "react";
import { Row, Col } from "reactstrap";
import GrossYield from "./GrossYield";
import InitialInvestment from "./InitialInvestment";
import TotalReturn from "./TotalReturn";

const Financials = () => (
  <>
    <GrossYield />

    <Row noGutters>
      <Col sm="4">
        <InitialInvestment />
      </Col>
      <Col sm="8">
        <TotalReturn />
      </Col>
    </Row>
  </>
);

export default Financials;
