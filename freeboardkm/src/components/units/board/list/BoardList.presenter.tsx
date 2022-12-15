import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.TableTop />
        <S.Row>
          <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
          <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
        </S.Row>
        {props.data?.fetchBoards.map((el, index) => (
          <S.Row key={el._id}>
            <S.ColumnBasic>{el._id.slice(-4).toUpperCase()}</S.ColumnBasic>
            <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {el.title}
            </S.ColumnTitle>
            <S.ColumnBasic>{el.writer}</S.ColumnBasic>
            <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
          </S.Row>
        ))}
        <S.TableBottom />

        <S.MovePage onClick={props.onClickPrev}>
          <span disabled={props.startPage === 1}>이전페이지</span>
        </S.MovePage>

        {new Array(10).fill(1).map((el, index) => (
          <span key={index + 1}>{index + 1}</span>
        ))}

        <S.MovePage onClick={props.onClickNext}>
          <span disabled={props.startPage + 10 >= props.lastPage}>
            다음페이지
          </span>
        </S.MovePage>
        <S.Footer>
          <S.Button onClick={props.onClickMoveToBoardNew}>
            <S.PencilIcon src="/images/board/list/write.png" />
            게시물 등록하기
          </S.Button>
        </S.Footer>
      </S.Wrapper>
    </>
  );
}
