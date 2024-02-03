import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import { PageContext, displayNumber } from "../../../../../utils";

import "./style.scss";

const LeaseAndTenant = ({
  rentPaymentStatus,
  securityDeposit,
  leaseConcessions,
  tenantPurchaseOption,
  sectionEight,
  petFeeAmount,
  petDeposits,
  ownerResponsible,
  tenantResponsible,
}) => {
  const { occupancy, leaseTerm } = useContext(PageContext)[0];

  const leaseStart = leaseTerm || "---";
  const leaseEnd = leaseTerm || "---";

  return (
    <div className="LeaseAndTenant card-box">
      <div className="card-title">Lease and Tenant</div>

      <Row noGutters>
        <Col sm="6">
          <div className="title">Lease Summary</div>
          <div className="sub-title">Occupancy</div>
          <div className="value">{occupancy}</div>

          <div className="sub-title">Rent Payment Status</div>
          <div className="value">{rentPaymentStatus}</div>

          <div className="sub-title">Security Deposit</div>
          <div className="value">${displayNumber(securityDeposit)}</div>

          <div className="sub-title">Original Lease Start Date</div>
          <div className="value">{leaseStart}</div>

          <div className="sub-title">Lease End Date</div>
          <div className="value">{leaseEnd}</div>

          <div className="sub-title">Lease Concessions</div>
          <div className="value">{leaseConcessions}</div>
        </Col>
        <Col sm="6">
          <div className="title">Tenant Profile</div>

          <div className="sub-title">Tenant Purchase Option</div>
          <div className="value">{tenantPurchaseOption}</div>

          <div className="sub-title">Section 8</div>
          <div className="value">{sectionEight}</div>

          <div className="sub-title">Pet Fee Amount</div>
          <div className="value">${displayNumber(petFeeAmount)}</div>

          <div className="sub-title">Pet Deposits</div>
          <div className="value">{petDeposits}</div>
        </Col>
      </Row>

      <div className="sep-line" />

      <Row noGutters>
        <Col sm="12">
          <div className="title">Expense Split</div>

          <div className="sub-title">Owner is responsible for</div>
          <div className="value">{ownerResponsible}</div>

          <div className="sub-title">Tenant is responsible for</div>
          <div className="value">{tenantResponsible}</div>
        </Col>
      </Row>

      <div className="bottom-link">
        View <a href="#">Tenant Ledger</a>
      </div>
    </div>
  );
};

LeaseAndTenant.defaultProps = {
  rentPaymentStatus: "Current",
  securityDeposit: 3000,
  leaseConcessions: "No",
  tenantPurchaseOption: "Not Applicable",
  sectionEight: "Not Applicable",
  petFeeAmount: 250,
  petDeposits: "Not Applicable",
  ownerResponsible: "None",
  tenantResponsible: "Gas, Water, Electric, Garbage, Lawn, Pest Ctrl",
};

export default LeaseAndTenant;
