import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";

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
  const { data, refetch } = useQuery(FETCH_BOARDS);

  //   뮤테이션 하고 리패치가 아니라 그냥 리패치만 하고싶을 때 이렇게 해주면됨
  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <div>
      {/* 임시 배열 10개를 생성하여, 데이터가 없을 때도 높이 30px을 유지하여 reflow 방지 */}
      {(data?.fetchBoards ?? new Array(10).fill(1)).map((el) => (
        <div key={el._id} style={{ height: "30px" }}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.contents}</span>
        </div>
      ))}

      {new Array(10).fill("철수").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
