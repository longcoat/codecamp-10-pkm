import styled from "@emotion/styled";

import Slider from "react-slick";

export const StyledSlider = styled(Slider)`
  .slick-prev {
    left: 30px;
    z-index: 9999;
  }
  .slick-next {
    right: 30px;
  }
  .slick-dots {
    bottom: 40px;
  }
`;

export const Img = styled.img`
  margin: 0 auto;
  width: 100%;
  padding-bottom: 20px;
  height: 300px;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  height: 250px;
  background-color: black;
  //font-family: myfont;
`;
