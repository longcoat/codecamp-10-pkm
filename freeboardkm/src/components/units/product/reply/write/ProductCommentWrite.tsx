import * as S from "./ProductCommentWrite.styles";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function ProductCommentWrite() {
  const onChangeComment = () => {};

  return (
    <>
      <S.Container>
        <S.QQbox>
          <S.QImg src="/yellowpencil.png" />
          <S.Text>문의하기</S.Text>
        </S.QQbox>
        <S.QuillBox>
          <ReactQuill
            theme="snow"
            onChange={onChangeComment}
            style={{ height: "150px" }}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
        </S.QuillBox>
        <S.Qbox>
          <S.QButton>문의하기</S.QButton>
        </S.Qbox>
        <S.CommentList>
          <S.CommentWrapper>
            <S.CommentArray>
              <S.RComment>
                <S.ImageBox src="/profile.png"></S.ImageBox>
                <S.RightBoxx>
                  <S.CommentBox>
                    <S.Writer>땅찌</S.Writer>
                    <S.Content>
                      가격 할인 가능한가요?? 기존 가격은 조금 비싸네요.
                    </S.Content>
                  </S.CommentBox>
                  <S.Date>
                    <S.DateDetail>2021.02.22</S.DateDetail>
                  </S.Date>
                </S.RightBoxx>
              </S.RComment>
              <S.RComment>
                <S.ImageBox src="/profile.png"></S.ImageBox>
                <S.RightBoxx>
                  <S.CommentBox>
                    <S.Writer>땅찌</S.Writer>
                    <S.Content>
                      가격 할인 가능한가요?? 기존 가격은 조금 비싸네요.
                    </S.Content>
                  </S.CommentBox>
                  <S.Date>
                    <S.DateDetail>2021.02.22</S.DateDetail>
                  </S.Date>
                </S.RightBoxx>
              </S.RComment>
              <S.RComment>
                <S.ImageBox src="/profile.png"></S.ImageBox>
                <S.RightBoxx>
                  <S.CommentBox>
                    <S.Writer>땅찌</S.Writer>
                    <S.Content>
                      가격 할인 가능한가요?? 기존 가격은 조금 비싸네요.
                    </S.Content>
                  </S.CommentBox>
                  <S.Date>
                    <S.DateDetail>2021.02.22</S.DateDetail>
                  </S.Date>
                </S.RightBoxx>
              </S.RComment>
            </S.CommentArray>
          </S.CommentWrapper>
        </S.CommentList>
      </S.Container>
    </>
  );
}
