import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Grid, Image } from "../elements";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
// import img4 from "./images/img4.png";
// import img5 from "./images/img5.png";
// import img6 from "./images/img6.png";
// import img7 from "./images/img7.png";
// import img8 from "./images/img8.png";

//라이브러리 이벤트 속성과 디자인 요소 스타일링
const SliderBanner = (props) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
//사용할 이미지를 Slider 태그 안에 위치 시킴
  return (
    <Grid margin="30px 0 0 0">
      <Slider {...settings}>
        <Grid width="100%">
          <Image height="400px" src={img3} />
        </Grid>
        <Grid width="100%">
          <Image height="400px" src={img1} />
        </Grid>
        <Grid width="100%">
          <Image height="400px" src={img2} />
        </Grid>
        <Grid width="100%">
          <Image height="400px" src={img1} />
        </Grid>
        <Grid width="100%">
          <Image height="400px" src={img1} />
        </Grid>
        <Grid width="100%">
          <Image height="400px" src={img1} />
        </Grid>
        <Grid width="100%">
          <Image height="400px" src={img1} />
        </Grid>
        <Grid width="100%">
          <Image height="400px" src={img1} />
        </Grid>
      </Slider>
    </Grid>
  );
};
export default SliderBanner;
