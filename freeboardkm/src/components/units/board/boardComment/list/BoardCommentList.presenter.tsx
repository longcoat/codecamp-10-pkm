import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import { getDate } from "../../../../../commons/libraries/utils";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el) => (
          <S.Wrapper1 key={el._id}>
            <S.Wrapper2>
              <S.Avatar src="/images/avatar.png" />
              <S.Wrapper3>
                <S.Wrapper4>
                  <S.Writer>{el.writer}</S.Writer>
                </S.Wrapper4>
                <S.Contents>{el.contents}</S.Contents>
              </S.Wrapper3>
              <S.Wrapper5>
                <S.Update src="/images/boardComment/list/update.png/" />
                <S.Delete
                  id={el._id}
                  src="/images/boardComment/list/delete.png/"
                  onClick={props.onClickDelete}
                />
              </S.Wrapper5>
            </S.Wrapper2>
            <S.Date>{getDate(el?.createdAt)}</S.Date>
          </S.Wrapper1>
        ))}
      </InfiniteScroll>
    </>
  );
}
