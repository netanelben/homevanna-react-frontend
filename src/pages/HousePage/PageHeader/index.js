import React from "react";
import Slider from "react-slick";
import _ from "lodash";
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
};

const PageHeader = ({ coverImageUrl, images }) => {
  const chunkedImageList = _.chunk(images, 5)[0];

  return (
    <div className="PageHeader">
      <div
        className="cover-image"
        style={{ backgroundImage: `url(${coverImageUrl})` }}
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
          <div className="address-line-1">3132 Abbey Dr Sw</div>
          <div className="address-line-2">Atlanta, GA 30311</div>
        </div>

        <div className="gallery">
          Gallery ({images.length})
          <ul>
            {chunkedImageList.map((imageUrl, key) => (
              <li key={key} style={{ backgroundImage: `url(${imageUrl})` }} />
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
  images: [
    "https://cdn.rets.ly/67b491ac3cdd2258521d4b13e2c392ac/803638ba952a86aab1fe2480b5d580db/1.jpeg",
    "https://cdn.rets.ly/67b491ac3cdd2258521d4b13e2c392ac/803638ba952a86aab1fe2480b5d580db/1.jpeg",
    "https://cdn.rets.ly/67b491ac3cdd2258521d4b13e2c392ac/803638ba952a86aab1fe2480b5d580db/1.jpeg",
    "https://cdn.rets.ly/67b491ac3cdd2258521d4b13e2c392ac/803638ba952a86aab1fe2480b5d580db/1.jpeg",
    "https://cdn.rets.ly/67b491ac3cdd2258521d4b13e2c392ac/803638ba952a86aab1fe2480b5d580db/1.jpeg",
    "https://cdn.rets.ly/67b491ac3cdd2258521d4b13e2c392ac/803638ba952a86aab1fe2480b5d580db/1.jpeg",
    "https://cdn.rets.ly/67b491ac3cdd2258521d4b13e2c392ac/803638ba952a86aab1fe2480b5d580db/1.jpeg",
  ],
};

export default PageHeader;
