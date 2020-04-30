import React from "react";
import classnames from "classnames";
import { Row, Col } from "reactstrap";
import {
  faFolderOpen,
  faCloudDownloadAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

const ItemBox = ({ title, downloadLink = null }) => {
  const classNames = classnames("item-box flex", {
    "no-document": !downloadLink,
  });

  return (
    <div className={classNames}>
      <span>{title}</span>
      <div className="controls">
        {!downloadLink && <span className="na">N/A</span>}

        {downloadLink && (
          <>
            <button>
              <FontAwesomeIcon icon={faCloudDownloadAlt} />
            </button>
            <button>
              <FontAwesomeIcon icon={faFolderOpen} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const DiligenceDocuments = () => (
  <div className="DiligenceDocuments card-box">
    <div className="card-title">Diligence Documents</div>

    <Row noGutters>
      <Col sm="6">
        <ItemBox title="Property Valuation" downloadLink="1" />
      </Col>
      <Col sm="6">
        <ItemBox title="Inspection Report" downloadLink="1" />
      </Col>
    </Row>

    <Row noGutters>
      <Col sm="6">
        <ItemBox title="Inspection Report 2" downloadLink="1" />
      </Col>
      <Col sm="6">
        <ItemBox title="Title Report" downloadLink="1" />
      </Col>
    </Row>

    <Row noGutters>
      <Col sm="6">
        <ItemBox title="Ledger" downloadLink="1" />
      </Col>
      <Col sm="6">
        <ItemBox title="Prelim Insurance" downloadLink="1" />
      </Col>
    </Row>

    <Row noGutters>
      <Col sm="6">
        <ItemBox title="Lease Abstract" />
      </Col>
      <Col sm="6">
        <ItemBox title="HOA - CC&R" />
      </Col>
    </Row>
  </div>
);

export default DiligenceDocuments;
