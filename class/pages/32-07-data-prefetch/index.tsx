import { gql, useApolloClient, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const router = useRouter();
  const client = useApolloClient();

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickMove = (boardId: string) => () => {
    void router.push(`/32-08-data-prefetch-moved/${boardId}`);
  };

  const prefetchBoard = (boardId: string) => async () => {
    // useQuery
    // useLazyQuery
    // useApolloClient

    await client.query({
      query: FETCH_BOARD,
      variables: { boardId },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span
            style={{ margin: "10px" }}
            onClick={onClickMove(el._id)}
            onMouseOver={prefetchBoard(el._id)}
          >
            {el.title}
          </span>
          <span style={{ margin: "10px" }}>{el.contents}</span>
        </div>
      ))}
    </div>
  );
}
