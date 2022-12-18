import { gql, useMutation, useQuery } from "@apollo/client";

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

export default function OptimisticPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: "639a7d73531bd200286b7837",
    },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickLike = () => {
    void likeBoard({
      variables: {
        boardId: "639a7d73531bd200286b7837",
      },
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "639a7d73531bd200286b7837" },
          data: {
            fetchBoard: {
              _id: "",
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: {
      //         boardId: "639a7d73531bd200286b7837",
      //       },
      //     },
      //   ],
    });
  };

  return (
    <>
      <div>좋아요 : {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아해요</button>
    </>
  );
}
