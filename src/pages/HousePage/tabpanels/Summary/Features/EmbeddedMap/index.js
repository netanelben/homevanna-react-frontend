import React, { useContext } from "react";
import { PageContext } from "../../../../../../utils";

import "./style.scss";

const EmbeddedMap = () => {
  const { address } = useContext(PageContext)[0];
  const mapSrc = `https://maps.google.com/maps?q=${address}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <iframe
      className="EmbeddedMap"
      width="100%"
      height="216"
      id="gmap_canvas"
      src={mapSrc}
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
    />
  );
};

export default EmbeddedMap;
