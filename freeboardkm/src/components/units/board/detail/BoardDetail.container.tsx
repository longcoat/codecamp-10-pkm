import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };

  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickBoardDelete = async () => {
    await deleteBoard({
      variables: {
        boardId: router.query.boardId,
      },
    });
    onClickMoveToBoardList();
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickBoardDelete={onClickBoardDelete}
    />
  );
}
