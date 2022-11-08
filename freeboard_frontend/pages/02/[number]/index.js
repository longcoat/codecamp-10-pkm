import { useState } from "react";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import {
  Container,
  Wrapper,
  Header,
  Body,
  HeaderLeft,
  LeftImage,
  LeftText,
  LeftName,
  LeftDate,
  HeaderRight,
  RightImage,
  NumberOne,
  NumberTwo,
  Title,
  Picture,
  BodyText,
  YouTube,
  Footer,
  Thumbs,
  ThumpsUp,
  ThumpsNumber1,
  ThumpsDown,
  ThumpsNumber2,
  ThumpsWrap,
  LocationBtn,
  ClickEvent,
} from "../../../styles/boards";
//import { getDate } from "../../../src/commons/library/utils";

export const getDate = (value) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  return `${yyyy}년 ${mm}월 ${dd}일`;
};

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function RouterPage() {
  const [click, setClick] = useState(false);
  const router = useRouter();

  const onClickToolTip = () => {
    setClick(!click);
    console.log(click);
  };

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.number,
    },
  });

  return (
    <Container>
      <Wrapper>
        <Header>
          <HeaderLeft>
            <LeftImage></LeftImage>
            <LeftText>
              <LeftName>{data && data.fetchBoard?.writer}</LeftName>
              <LeftDate>{getDate(data?.fetchBoard?.createdAt)}</LeftDate>
            </LeftText>
          </HeaderLeft>
          <HeaderRight>
            <RightImage>
              <NumberOne></NumberOne>
              <NumberTwo>
                <LocationBtn onClick={onClickToolTip}>
                  {click && (
                    <ClickEvent>
                      {data?.fetchBoard.boardAddress.address}
                      {data?.fetchBoard.boardAddress.addressDetail}
                    </ClickEvent>
                  )}
                </LocationBtn>
              </NumberTwo>
            </RightImage>
          </HeaderRight>
        </Header>
        <Body>
          <Title>{data && data.fetchBoard?.title}</Title>
          <Picture></Picture>
          <BodyText>{data && data.fetchBoard?.contents}</BodyText>
          <YouTube>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/gFb1TftvdoM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </YouTube>
        </Body>
        <Footer>
          <Thumbs>
            <ThumpsWrap>
              <ThumpsUp></ThumpsUp>
              <ThumpsNumber1>1920</ThumpsNumber1>
            </ThumpsWrap>
            <ThumpsWrap>
              <ThumpsDown></ThumpsDown>
              <ThumpsNumber2>1920</ThumpsNumber2>
            </ThumpsWrap>
          </Thumbs>
        </Footer>
      </Wrapper>
    </Container>
  );
}
