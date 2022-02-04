import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 1500,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img
          src="https://res.cloudinary.com/marin-dev/image/upload/v1643985935/disney%20%2B/images/slider-badging_idylgd.jpg"
          alt=""
        />
      </Wrap>
      <Wrap>
        <img
          src="https://res.cloudinary.com/marin-dev/image/upload/v1643985935/disney%20%2B/images/slider-badag_eniegf.jpg"
          alt=""
        />
      </Wrap>
      <Wrap>
        <img
          src="https://res.cloudinary.com/marin-dev/image/upload/v1643985936/disney%20%2B/images/slider-scale_qcbxme.jpg"
          alt=""
        />
      </Wrap>
      <Wrap>
        <img
          src="https://res.cloudinary.com/marin-dev/image/upload/v1643985936/disney%20%2B/images/slider-scales_cwzbrc.jpg"
          alt=""
        />
      </Wrap>
    </Carousel>
  );
}

export default ImageSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
