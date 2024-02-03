import React, { useEffect, useContext, useState } from "react";
import { PageContext } from "../../../utils";
import Carousel from "@brainhubeu/react-carousel";
import _ from "lodash";

import "@brainhubeu/react-carousel/lib/style.css";
import "./style.scss";

const PageHeader = () => {
  const { address, images } = useContext(PageContext)[0];
  const [currentImage, setCurrentImage] = useState(null);

  const handleGalleryImgClick = (imageUrl) => setCurrentImage(imageUrl);

  useEffect(() => {
    setCurrentImage(images[0]);
  }, [images]);

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
  };

  return (
    <div className="PageHeader">
      <div
        className="cover-image"
        style={{ backgroundImage: `url(${currentImage})` }}
      />

      <Carousel className="mobile-slider" {...settings}>
        {images.map((imageUrl, key) => (
          <div key={key}>
            <div
              style={{ backgroundImage: `url('${imageUrl}')` }}
              className="image-wrapper"
            />
          </div>
        ))}
      </Carousel>

      <div className="container flex">
        <div>
          <div className="address-line-1">{address.split(",")[0]}</div>
          <div className="address-line-2">
            {address.split(",")[1]} {address.split(",")[2]}{" "}
            {address.split(",")[3]}
          </div>
        </div>

        <div className="desktop-gallery">
          <div>Gallery ({images.length})</div>

          <div className="images">
            {images.map((imageUrl, key) => (
              <img
                src={imageUrl}
                key={key}
                onClick={() => handleGalleryImgClick(imageUrl)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
