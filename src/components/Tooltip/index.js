import React, { useState } from "react";
import { Tooltip as ReactstrapTooltip } from "reactstrap";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { displayTooltip } from "../../utils";

import "./style.scss";

const Tooltip = ({ context }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div className="Tooltip">
      <FontAwesomeIcon icon={faInfoCircle} id={context} />
      <ReactstrapTooltip
        placement="right"
        isOpen={tooltipOpen}
        target={context}
        toggle={toggle}
      >
        {displayTooltip(context)}
      </ReactstrapTooltip>
    </div>
  );
};

export default Tooltip;
