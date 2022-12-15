import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
    }
  }
`;

export default function Yeni() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const [search, setSearch] = useState("");

  console.log(data);

  const onChangeCompare = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);

    setSearch(event.target.value);
  };

  const onClickCompare = () => {
    void refetch({ page: 1, search });
  };

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div key={el._id}>
          <div>{el.writer}</div>
          <div>{el.title}</div>
        </div>
      ))}
      <button onClick={onClickCompare}>검색</button>
      <input type="text" onChange={onChangeCompare} />
    </>
  );
}
