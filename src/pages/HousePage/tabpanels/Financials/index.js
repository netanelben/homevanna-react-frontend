import React, { useContext, useEffect } from "react";
import { PageContext } from "../../../../utils/Context";
import { fetchPropTransactionsData } from "../../../../utils";
import { Row, Col } from "reactstrap";
import GrossYield from "./GrossYield";
import InitialInvestment from "./InitialInvestment";
import TotalReturn from "./TotalReturn";
import InvestmentValue from "./InvestmentValue";

const Financials = () => {
  const { parcelId } = useContext(PageContext)[0];
  const dispatch = useContext(PageContext)[1];

  useEffect(() => {
    if (!parcelId) return;

    fetchPropTransactionsData(parcelId).then((data) =>
      dispatch({ type: "HYDRATE_TRANSACTIONS_DATA", payload: data })
    );
  }, [parcelId]);

  return (
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
};

export default Financials;
