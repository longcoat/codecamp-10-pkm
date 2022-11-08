import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 996px;
  padding: 80px 0;
`;

export const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftImage = styled.div`
  width: 56px;
  height: 56px;
  background-image: url("/profile.png");
  margin-right: 12px;
`;

export const LeftText = styled.div``;

export const LeftName = styled.div`
  font-size: 24px;
  line-height: 36px;
`;

export const LeftDate = styled.div``;

export const HeaderRight = styled.div``;

export const RightImage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NumberOne = styled.div`
  width: 32px;
  height: 32px;
  background-image: url("/Clip.png");
  margin-right: 22px;
`;

export const NumberTwo = styled.div``;

export const LocationBtn = styled.button`
  width: 32px;
  height: 32px;
  background-image: url("/Location.png");
  background-position: center;
  background-repeat: no-repeat;
`;

export const ClickEvent = styled.div``;

export const Body = styled.div`
  & > * {
    margin-bottom: 40px;
  }
  padding: 80px 0px 160px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

export const Picture = styled.div`
  width: 100%;
  padding-bottom: 67.25%;
  background-image: url("/Festival.png");
`;

export const BodyText = styled.div``;

export const YouTube = styled.div`
  display: flex;
  justify-content: center;
`;

export const Footer = styled.div``;

export const Thumbs = styled.div`
  & > button {
    /* width: 24px;
    height: 24px; */
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ThumpsWrap = styled.button`
  display: inline-block;
  margin: 20px;
`;

export const ThumpsUp = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(/Thumps1.png);
  background-position: center;
  background-repeat: no-repeat;
`;

export const ThumpsNumber1 = styled.div``;

export const ThumpsDown = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(Thumps2.png);
  background-position: center;
  background-repeat: no-repeat;
`;

export const ThumpsNumber2 = styled.div``;
