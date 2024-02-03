import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Outlet,
} from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import PageHeader from "./pages/HousePage/PageHeader";
import SellingCard from "./pages/HousePage/SellingCard";
import PurchaseControls from "./pages/HousePage/PurchaseControls";
import {
  Summary,
  Financials,
  Analysis,
  BuyProcess,
  SimilarListing,
} from "./pages/HousePage/tabpanels";
import ContextWrapper from "./utils/Context";

import "./App.css";
import "./pages/HousePage/style.scss";

const getRoutes = () => [
  {
    path: "/summary",
    component: <Summary />,
  },
  {
    path: "/financials",
    component: <Financials />,
  },
  {
    path: "/analysis",
    component: <Analysis />,
  },
  {
    path: "/buy-process",
    component: <BuyProcess />,
  },
  {
    path: "/similar-listings",
    component: <SimilarListing />,
  },
];

function App() {
  return (
    <Router>
      <ContextWrapper>
        {/* <PageHeader /> */}

        <div className="page-nav">
          <NavLink to="/summary">Summary</NavLink>
          <NavLink to="/financials">Financials</NavLink>
          <NavLink to="/analysis">Analysis</NavLink>
          <NavLink to="/buy-process">Buy Process</NavLink>
          <NavLink to="/similar-listings">Similar Listings</NavLink>
        </div>

        <div className="container">
          <div className="flex">
            <SellingCard />
            <PurchaseControls />
          </div>

          <Routes>
            {getRoutes().map((route) => (
              <Route
                key={route.path}
                path={route.path}
                Component={() => route.component}
              />
            ))}
          </Routes>

          <Outlet />
        </div>
      </ContextWrapper>
    </Router>
  );
}

export default App;
