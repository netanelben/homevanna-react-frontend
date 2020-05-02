import React from "react";
import { Row, Col } from "reactstrap";
import "./style.scss";

const LeaseAndTenant = ({
  occupied,
  rentPaymentStatus,
  securityDeposit,
  originalLeaseStartDate,
  leaseEndDate,
  leaseConcessions,
  tenantPurchaseOption,
  sectionEight,
  petFeeAmount,
  petDeposits,
  ownerResponsible,
  tenantResponsible,
}) => (
  <div className="LeaseAndTenant card-box">
    <div className="card-title">Lease and Tenant</div>

    <Row noGutters>
      <Col sm="6">
        <div className="title">Lease Summary</div>
        <div className="sub-title">Occupancy</div>
        <div className="value">{occupied}</div>

        <div className="sub-title">Rent Payment Status</div>
        <div className="value">{rentPaymentStatus}</div>

        <div className="sub-title">Security Deposit</div>
        <div className="value">${securityDeposit}</div>

        <div className="sub-title">Original Lease Start Date</div>
        <div className="value">{originalLeaseStartDate}</div>

        <div className="sub-title">Lease End Date</div>
        <div className="value">{leaseEndDate}</div>

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
        <div className="value">${petFeeAmount}</div>

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

LeaseAndTenant.defaultProps = {
  occupied: true,
  rentPaymentStatus: "Current",
  securityDeposit: "3,000",
  originalLeaseStartDate: "07/25/2017",
  leaseEndDate: "05/31/2022",
  leaseConcessions: "No",
  tenantPurchaseOption: "Not Applicable",
  sectionEight: "Not Applicable",
  petFeeAmount: "250",
  petDeposits: "Not Applicable",
  ownerResponsible: "None",
  tenantResponsible: "Gas, Water, Electric, Garbage, Lawn, Pest Ctrl",
};

export default LeaseAndTenant;
