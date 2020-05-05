import React from "react";
import { Row, Col } from "reactstrap";
import HouseCard from "../../../../components/HouseCard";

import "./style.scss";

const SimilarListing = ({ houseList }) => (
  <div className="SimilarListing">
    <Row className="narrow-gutter">
      {houseList.map((house) => (
        <Col xs="12" sm="6" md="4" lg="3">
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
      price: "$2,889,000",
      marketRent: "4,302",
      capRate: "8.23",
      totalReturn: "58,874",
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
      price: "$1,389,000",
      marketRent: "4,302",
      capRate: "4.23",
      totalReturn: "58,874",
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
      price: "$2,189,000",
      marketRent: "4,302",
      capRate: "4.23",
      totalReturn: "58,874",
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
      price: "$1,089,000",
      marketRent: "3,302",
      capRate: "4.23",
      totalReturn: "48,874",
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
