import { ListWrap, ListItem, Quest, QuestionTitle } from "../../styles/emotion";
export default function EmotionPage() {
  //자바스크립트 쓰는곳

  return (
    <div className="container">
      <div className="header">
        <div className="header__one">
          <span>돋보기사진이미지태그쓰던지</span>
        </div>
        <div className="header__two">
          <div>마이</div>
          <div>
            <span>사진</span>
            <span>임정아</span>
            <span>??</span>
          </div>
        </div>
        <div className="header__three">
          <span>공지사항</span>
          <span>이벤트</span>
          <span>FAQ</span>
          <span>Q&A</span>
        </div>
      </div>
      <div className="body">
        <ListWrap>
          <ListItem>
            <Quest>Q.01</Quest>
            <QuestionTitle>리뷰 작성은 어떻게 하나요?</QuestionTitle>
          </ListItem>
          <ListItem>
            <Quest>Q.02</Quest>
            <QuestionTitle>리뷰 수정/삭제는 어떻게 하나요?</QuestionTitle>
          </ListItem>
          <ListItem>
            <Quest>Q.03</Quest>
            <QuestionTitle>아이디/비밀번호를 잊어버렸어요</QuestionTitle>
          </ListItem>
          <ListItem>
            <Quest>Q.04</Quest>
            <QuestionTitle>회원탈퇴를 하고싶어요.</QuestionTitle>
          </ListItem>
          <ListItem>
            <Quest>Q.05</Quest>
            <QuestionTitle>출발지 설정은 어떻게 하나요?</QuestionTitle>
          </ListItem>
          <ListItem>
            <Quest>Q.06</Quest>
            <QuestionTitle>비밀번호를 변경하고 싶어요</QuestionTitle>
          </ListItem>
        </ListWrap>
      </div>
      <div className="footer"></div>
    </div>
  );
}
