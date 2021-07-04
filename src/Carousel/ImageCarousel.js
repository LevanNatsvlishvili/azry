import React, { useState } from "react";
import styled from "styled-components";
import ImageCarouselCurrent from "./ImageCarouselCurrent";

const imgUrls = [
  "https://i.ibb.co/dGBdvnW/image1.jpg",
  "https://i.ibb.co/30tnJTw/07c345d0eca11d0bc97c894751ba1b46.jpg",
  "https://i.ibb.co/M6zdqhV/11699147425707699031013.jpg",
  "https://i.ibb.co/f1mGD7m/fivfelv7.jpg",
  "https://i.ibb.co/xHvMCKx/unnamed.jpg"
];

const Carousel = styled.div`
  width:100%;
  position:relative;
  & img {
    width:100%;
    height:700px;
  }
`

const Arrow = styled.button`
  position:absolute;
  top:50%;
  border:0;
  background:transparent;
  left:${props => !props.right ? '20px' : null};
  right:${props => props.right ? props.right : null};
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-right: 40px solid blue;
  border-bottom: 20px solid transparent;
  cursor:pointer;
  transform:${props => props.right ? 'rotate(180deg)' : null};
`

const ImageCarousle = (props) => {
  const [curr, setCurr] = useState(0)

  const handleLeft = () => {
    if (curr === 0) {
      setCurr(imgUrls.length - 1);
      return;
    }
    setCurr(curr - 1);
  }

  const handleRight = () => {
    if (curr === imgUrls.length - 1) {
      setCurr(0);
      return;
    }
    setCurr(curr + 1);
  }

  return (
    <Carousel>
      <Arrow onClick={handleLeft} />
      <ImageCarouselCurrent images={imgUrls} current={curr} />
      <Arrow onClick={handleRight} right='20px' />

    </Carousel>
  );
};
export default ImageCarousle;
