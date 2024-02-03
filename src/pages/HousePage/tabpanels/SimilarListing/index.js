import React, { useContext, useEffect } from "react";
import { PageContext } from "../../../../utils/Context";
import { Row, Col } from "reactstrap";
import HouseCard from "./HouseCard";
import { fetchSimilarListingsData } from "../../../../utils";

import "./style.scss";

const SimilarListing = () => {
  const { address, price, similarListings } = useContext(PageContext)[0];
  const dispatch = useContext(PageContext)[1];

  useEffect(() => {
    if (!address) return;

    const params = {
      city: address.split(",")[1],
      minPrice: price * 0.8,
      maxPrice: price * 1.2,
    };

    fetchSimilarListingsData({ ...params }).then((data) =>
      dispatch({ type: "HYDRATE_SIMILAR_LISTINGS_DATA", payload: data })
    );
  }, [address]);

  return (
    <div className="SimilarListing">
      <Row className="narrow-gutter">
        {similarListings.map((house, key) => (
          <Col xs="12" sm="6" md="4" lg="3" key={key}>
            <HouseCard {...house} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SimilarListing;
