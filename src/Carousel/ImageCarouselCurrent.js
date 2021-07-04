import React from "react";

const ImageCarouselCurrent = (props) => {
  const { images, current } = props;
  return (
    <img src={images[current]} alt />
  );
};

export default ImageCarouselCurrent;