import React from "react";
import { Row, Col } from "reactstrap";
import HouseCard from "./HouseCard";

import "./style.scss";

const SimilarListing = ({ houseList }) => (
  <div className="SimilarListing">
    <Row className="narrow-gutter">
      {houseList.map((house, key) => (
        <Col xs="12" sm="6" md="4" lg="3" key={key}>
          <HouseCard {...house} />
        </Col>
      ))}
    </Row>
  </div>
);

SimilarListing.defaultProps = {
  houseList: [
    {
      houseImageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F259600%2Fpexels-photo-259600.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&f=1&nofb=1",
      price: 2889000,
      marketRent: 4302,
      capRate: "8.23",
      totalReturn: 58874,
      returnYears: "5",
      address: "123 Fale St. Venice, CA, 90210",
      bedroomsCount: 2,
      bathroomsCount: 2,
      size: "567",
      rating: 3,
    },
    {
      houseImageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F259600%2Fpexels-photo-259600.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&f=1&nofb=1",
      price: 1389000,
      marketRent: 4302,
      capRate: "4.23",
      totalReturn: 58874,
      returnYears: "5",
      address: "123 Fale St. Venice, CA, 90210",
      bedroomsCount: 3,
      bathroomsCount: 3,
      size: "667",
      rating: 4,
    },
    {
      houseImageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F259600%2Fpexels-photo-259600.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&f=1&nofb=1",
      price: 2189000,
      marketRent: 4302,
      capRate: "4.23",
      totalReturn: 58874,
      returnYears: "5",
      address: "123 Fale St. Venice, CA, 90210",
      bedroomsCount: 3,
      bathroomsCount: 3,
      size: "667",
      rating: 4,
    },
    {
      houseImageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F259600%2Fpexels-photo-259600.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&f=1&nofb=1",
      price: 1089000,
      marketRent: 3302,
      capRate: "4.23",
      totalReturn: 48874,
      returnYears: "2",
      address: "123 Fale St. Venice, CA, 90210",
      bedroomsCount: 1,
      bathroomsCount: 3,
      size: "367",
      rating: 4,
    },
  ],
};

export default SimilarListing;
