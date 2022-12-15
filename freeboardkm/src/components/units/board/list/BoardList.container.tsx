import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal } from "antd";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const [startPage, setStartPage] = useState(1);
  const [isPageClick, setIsPageClick] = useState(1);

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage =
    dataBoardsCount !== null
      ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
      : 1;

  const onClick = (event: MouseEvent<HTMLSpanElement>) => {
    setIsPageClick(Number(event.currentTarget.id));
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrev = (event: MouseEvent<HTMLSpanElement>) => {
    if (startPage === 1) {
      Modal.warning({
        content: "첫번째 페이지입니다",
      });
      return;
    }
    setStartPage((prev) => prev - 10);
    void refetch({ page: startPage - 10 });
    setIsPageClick(startPage - 10);
  };

  const onClickNext = (event: MouseEvent<HTMLSpanElement>) => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      void refetch({ page: startPage + 10 });
      setIsPageClick(startPage + 10);
    }
  };

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLAnchorElement>) => {
    router.push(`/boards/${event.target.id}`);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClick={onClick}
      isPageClick={isPageClick}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      startPage={startPage}
      lastPage={lastPage}
    />
  );
}
