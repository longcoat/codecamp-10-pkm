import * as S from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <S.Wrapper1>
      <>
        <S.CommentIMG src="/images/boardComment/write/CommentIMG.png" />
        <span>댓글</span>
      </>
      <S.Wrapper2>
        <S.Input placeholder="작성자" onChange={props.onChangeWriter} />
        <S.Input
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
        />
      </S.Wrapper2>
      <S.Wrapper3>
        <S.Contents
          onChange={props.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <S.Wrapper4>
          <S.Button onClick={props.onClickWrite}>등록하기</S.Button>
        </S.Wrapper4>
      </S.Wrapper3>
    </S.Wrapper1>
  );
}
