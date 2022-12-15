// 1. 검색어 입력창을 하나 만들어 주세요.
// 2. 검색어 입력창에 검색어를 입력할 때, 실시간으로 입력된 검색어로 게시물을 조회해 보세요.
// 3. 조회된 게시물에서 페이지를 선택하여 검색된 페이지를 조회해 보세요.
// 4. 디바운싱을 활용하여 효율적인 검색을 구현해 보세요.
// 5. 검색어와 매칭되는 단어 색을 빨간색으로 변경해 보세요.

import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function QuizPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const [keyword, setKeyword] = useState("");

  const onChangeSearch = (event) => {
    getDebounce(event.currentTarget.value);
  };

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 500);

  const onClickPage = (event) => {
    void refetch({ page: Number(event.currentTarget.id) });
    // getDebounce(event.currentTarget.value);
  };

  return (
    <div>
      <input type="text" onChange={onChangeSearch} />
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>
            {el.title
              .replaceAll(keyword, `#$%${keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <span
                  key={uuidv4()}
                  style={{ color: el === keyword ? "red" : "black" }}
                >
                  {el}
                </span>
              ))}
            <span style={{ margin: "10px" }}>{el.contents}</span>
          </span>
        </div>
      ))}

      {new Array(10).fill("보노보노").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
