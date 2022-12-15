import { gql, useQuery } from "@apollo/client";
import { Modal } from "antd";
import * as S from "../../src/components/units/14/Day14Quiz.styles";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function Day14QuizPage() {
  const [startPage, setStartPage] = useState(1);
  const [pageClick, setPageClick] = useState(1);

  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage =
    dataBoardsCount !== null
      ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
      : 1;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    setPageClick(Number(event.currentTarget.id));
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (startPage === 1) {
      Modal.warning({
        content: "첫번째 페이지입니다",
      });
      return;
    }
    setStartPage((prev) => prev - 10);
    void refetch({ page: startPage - 10 });
    setPageClick(startPage - 10);
  };

  const onClickNextPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      void refetch({ page: startPage + 10 });
      setPageClick(startPage + 10);
    }
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.contents}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      <S.MovePage onClick={onClickPrevPage}>
        <S.PrevBtn disabled={startPage === 1} />
      </S.MovePage>

      {new Array(10).fill(1).map(
        (el, index) =>
          index + startPage <= lastPage && (
            <S.PageNumber
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
              isPageClick={pageClick === index + startPage ? true : false}
            >
              {index + startPage}
            </S.PageNumber>
          )
      )}

      <S.MovePage onClick={onClickNextPage}>
        <S.NextBtn disabled={startPage + 10 >= lastPage} />
      </S.MovePage>
    </div>
  );
}
