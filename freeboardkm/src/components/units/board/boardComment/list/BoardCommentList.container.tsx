import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { MouseEvent } from "react";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";

export default function BoardCommentList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    const input_password = prompt("비밀번호를 입력하세요!");
    try {
      await deleteBoardComment({
        variables: {
          password: input_password,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const onLoadMore = () => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <BoardCommentListUI
      data={data}
      onClickDelete={onClickDelete}
      onLoadMore={onLoadMore}
    />
  );
}
