import { gql, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

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
  const [myIndex, setMyIndex] = useState([
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    true,
  ]);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    const qqq = [...myIndex];
    qqq[Number(event.currentTarget.id)] = true;
    console.log(qqq);
    setMyIndex(qqq);
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {!myIndex[index] && (
            <div>
              <span style={{ margin: "10px" }}>{el.title}</span>
              <span style={{ margin: "10px" }}>{el.contents}</span>
              <button id={String(index)} onClick={onClickEdit}>
                수정하기
              </button>
            </div>
          )}
          {myIndex[index] && <input type="text" />}
        </div>
      ))}
    </div>
  );
}
