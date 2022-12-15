import styled from "@emotion/styled";
import React from "react";
import Slider from "react-slick";

const Wrapper = styled.div`
  height: 360px;
  background-color: pink;
  font-family: myfont;
`;

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const StyledSlider = styled(Slider)`
    .slick-prev {
      left: 30px;
    }
    .slick-next {
      right: 30px;
    }
  `;
  const Img = styled.img`
    margin: 0 auto;
    height: 300px;
    object-fit: cover;
    padding-bottom: 20px;
  `;
  return (
    <>
      <Wrapper>
        <StyledSlider {...settings}>
          <div>
            <Img src="/dogdogdog.jpeg" />
          </div>
          <div>
            <Img src="/dogdogdog.jpeg" />
          </div>
          <div>
            <Img src="/dogdogdog.jpeg" />
          </div>
        </StyledSlider>
      </Wrapper>
    </>
  );
}
