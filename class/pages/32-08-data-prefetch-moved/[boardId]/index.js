import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

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

export default function StaticRoutedPage() {
  const router = useRouter();
  console.log(router);
  console.log(router.query.boardId);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  console.log("==========");
  console.log(data);
  console.log("==========");

  // const onClickMove = () => {
  //     router.push(`/09-01-boards/${router.query.number}/edit`)
  // }

  return (
    <>
      {/* <div>{router.query.number}번 게시글로 이동이 완료되었습니다.</div> */}
      <div>작성자: {data && data.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data ? data.fetchBoard.contents : "로딩중입니다!!!"}</div>
      {/* <button onClick={onClickMove}>수정하러가기</button> */}
    </>
  );
}
