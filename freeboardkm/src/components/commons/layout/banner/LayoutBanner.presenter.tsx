import * as S from "./LayoutBanner.styles";
import React from "react";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slideToshow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Wrapper>
      <S.StyledSlider {...settings}>
        <div>
          <S.Img src="/flo1.jpg" width="160px" />
        </div>
        <div>
          <S.Img src="/flo2.jpg" width="200px" />
        </div>
      </S.StyledSlider>
    </S.Wrapper>
  );
}
