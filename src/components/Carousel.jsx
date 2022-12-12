import React from "react";
import { Image } from "antd";
import Slider from "react-slick";
import "../styles/slick-theme.min.css";
import "../styles/slick.min.css";
import "../styles/Carousel.css";

const Carousel = (props) => {
  return (
    <Slider
      slidesToShow={3}
      slidesToScroll={1}
      autoplay
      dots
      speed={2000}
      pauseOnHover
      swipeToSlide
      infinite
      className="Carousel_container"
      responsive={[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ]}
    >
      {Object.values(props.items).map((item) => {
        return (
          <div
            key={item.id}
            style={{ width: "400px", opacity: "0.7" }}
            onClick={(e) => {
              const { details, image } = item;
              const { hasRepo, techUsed, textInfo, title, gitRepo } = details;
              props.handleItem({
                title,
                image,
                textInfo,
                techUsed,
                hasRepo,
                gitRepo,
              });
            }}
          >
            <Image
              src={item.image}
              preview={false}
              style={{ width: "300px" }}
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default Carousel;
