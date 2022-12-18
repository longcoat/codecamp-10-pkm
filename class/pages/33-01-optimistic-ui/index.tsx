import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: "6399abb2531bd200286b7781",
      },
    }
  );
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const onClickLike = () => {
    void likeBoard({
      variables: { boardId: "6399abb2531bd200286b7781" },
      // refetchQueries: [{ query: FETCH_BOARD, variables : { boardId : "6399abb2531bd200286b7781"} }],

      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
        // 서버에서 실제로 값을 받아오기 전에, 서버의 응답을 기다리지 않고 가짜로 응답을 받았다고 속이고 미리 보여주는 것.
      },

      // refetch하게 되면 다시한번 렌더링을 해야하므로, update로..
      update: (cache, { data }) => {
        cache.writeQuery({
          // modify는 수정만 할 수 있었다면, writeQuery는 기존에 없던 것도 새롭게 작성 할 수 있음.
          query: FETCH_BOARD,
          variables: { boardId: "6399abb2531bd200286b7781" },
          data: {
            fetchBoard: {
              _id: "",
              __typename: "Board", // id와 typename이 굉장히 중요⭐️
              likeCount: data?.likeBoard, // 좋아요 올라간 수
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>현재카운트(좋아요): {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기!!</button>
    </>
  );
}
