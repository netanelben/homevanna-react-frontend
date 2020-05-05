import React from "react";
import { Row, Col, Table } from "reactstrap";

import "./style.scss";

const PropertyManagementOptions = ({ companies }) => (
  <div className="PropertyManagementOptions card-box">
    <div className="card-title">Property Management Options</div>

    {companies.map(
      (
        {
          logoUrl,
          phone,
          email,
          address,
          address2,
          name,
          managementFee,
          leasingFee,
          renewalFee,
        },
        key
      ) => (
        <Row key={key} className="company-item">
          <Col sm="12" md="3">
            <div
              className="company-logo"
              style={{ backgroundImage: `url(${logoUrl})` }}
            />
            <ul className="company-details">
              {phone && <li>{phone}</li>}
              {email && <li>{email}</li>}
              {address && <li>{address}</li>}
              {address2 && <li>{address2}</li>}
            </ul>
          </Col>
          <Col sm="12" md="9">
            <div className="table-wrapper">
              <div className="company-name">{name}</div>

              <Table borderless={true} responsive>
                <tbody>
                  <tr>
                    <td>Property Management Fee:</td>
                    <td>{managementFee}% of Monthly Rent Collected</td>
                  </tr>
                  <tr>
                    <td>Leasing Fee:</td>
                    <td>{leasingFee}% of First Month’s Ren</td>
                  </tr>
                  <tr>
                    <td>Renewal Leasing Fee:</td>
                    <td>{renewalFee}% of First Month’s Rent</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      )
    )}
  </div>
);

PropertyManagementOptions.defaultProps = {
  companies: [
    {
      name: "Terra Residential Services, Inc., CRMC",
      logoUrl: "",
      phone: "713-895-9966",
      email: "jdominy@terraresidential.com",
      address: "9977 W. Sam Houston Pkwy. N, Ste 160",
      address2: "Houston, TX 77064",
      managementFee: "10",
      leasingFee: "100",
      renewalFee: "25",
    },
    {
      name: "Hemlane",
      logoUrl: "",
      phone: "(281) 807-4700",
      email: "trish@1stclassmgt.com",
      address: "13803 Jarvis Rd",
      address2: "Cypress, TX 77429",
      managementFee: "10",
      leasingFee: "100",
      renewalFee: "20",
    },
  ],
};

export default PropertyManagementOptions;
