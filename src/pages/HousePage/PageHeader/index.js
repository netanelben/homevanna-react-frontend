import React, { useContext, useState } from "react";
import Slider from "react-slick";
import _ from "lodash";
import { PageContext } from "../../../utils";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  centerMode: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  centerPadding: 15,
};

const PageHeader = ({ coverImageUrl }) => {
  const { address, images } = useContext(PageContext)[0];
  const [currentImage, setCurrentImage] = useState(coverImageUrl);

  const chunkedImageList = images.slice(0, 5);

  const handleGalleryImgClick = (imageUrl) => setCurrentImage(imageUrl);

  return (
    <div className="PageHeader">
      <div
        className="cover-image"
        style={{ backgroundImage: `url(${currentImage})` }}
      />

      <Slider {...settings}>
        {images.map((imageUrl, key) => (
          <div key={key}>
            <img src={imageUrl} />
          </div>
        ))}
      </Slider>

      <div className="container flex">
        <div>
          <div className="address-line-1">{address.split(",")[0]}</div>
          <div className="address-line-2">
            {address.split(",")[1]} {address.split(",")[2]}{" "}
            {address.split(",")[3]}
          </div>
        </div>

        <div className="gallery">
          Gallery ({images.length})
          <ul>
            {chunkedImageList.map((imageUrl, key) => (
              <li
                key={key}
                style={{ backgroundImage: `url(${imageUrl})` }}
                onClick={() => handleGalleryImgClick(imageUrl)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

PageHeader.defaultProps = {
  coverImageUrl:
    "https://cdn.rets.ly/67b491ac3cdd2258521d4b13e2c392ac/803638ba952a86aab1fe2480b5d580db/1.jpeg",
};

export default PageHeader;
