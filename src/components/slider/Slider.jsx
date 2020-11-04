import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import _ from "lodash";
const Slider = ({ images }) => {
  const [index, setIndex] = useState(1);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel
        fade={true}
        interval={5000}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {_.map(images, (image, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={image.urls.full}
              alt={image.alt_description}
              style={{ height: "100vh" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
