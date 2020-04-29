import React from "react";
import "./style.scss";

const PageHeader = () => (
  <div className="PageHeader">
    <div className="container flex">
      <div>
        <div className="address-line-1">3132 Abbey Dr Sw</div>
        <div className="address-line-2">Atlanta, GA 30311</div>
      </div>
      <div className="gallery">
        Gallery (15)
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </div>
  </div>
);

export default PageHeader;
