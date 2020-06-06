import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect,
} from "react-router-dom";
import { Row, Col } from "reactstrap";
import PageHeader from "./PageHeader";
import SellingCard from "./SellingCard";
import PurchaseControls from "./PurchaseControls";
import {
  Summary,
  Financials,
  Analysis,
  BuyProcess,
  SimilarListing,
} from "./tabpanels";
import ContextWrapper from "../../utils/Context";

import "./style.scss";

const HousePage = () => (
  <Router>
    <ContextWrapper>
      <PageHeader />

      <div className="house-page container">
        <Row className="main-row narrow-gutter">
          <Col sm="12" md="12" lg="4">
            <SellingCard />
          </Col>
          <Col sm="12" md="12" lg="8">
            <PurchaseControls />
          </Col>
        </Row>

        <div className="page-nav">
          <NavLink to="/summary">Summary</NavLink>
          <NavLink to="/financials">Financials</NavLink>
          <NavLink to="/analysis">Analysis</NavLink>
          <NavLink to="/buy-process">Buy Process</NavLink>
          <NavLink to="/similar-listings">Similar Listings</NavLink>
        </div>

        <Switch>
          <Route path="/summary">
            <Summary />
          </Route>
          <Route path="/financials">
            <Financials />
          </Route>
          <Route path="/analysis">
            <Analysis />
          </Route>
          <Route path="/buy-process">
            <BuyProcess />
          </Route>
          <Route path="/similar-listings">
            <SimilarListing />
          </Route>
          <Route path="/">
            <Summary />
          </Route>
          <Redirect exact from="/" to="/summary" />
        </Switch>
      </div>
    </ContextWrapper>
  </Router>
);

export default HousePage;
