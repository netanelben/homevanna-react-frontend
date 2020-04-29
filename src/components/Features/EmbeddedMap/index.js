import React from "react";
import "./style.scss";

const EmbeddedMap = () => (
  <iframe
    className="EmbeddedMap"
    width="100%"
    height="216"
    id="gmap_canvas"
    src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
  />
);

export default EmbeddedMap;
