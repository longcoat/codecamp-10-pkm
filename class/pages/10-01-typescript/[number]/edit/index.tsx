//게시글 수정 페이지

import BoardWrite from "../../../../src/components/units/board/10-write/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function BoardWritePage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  return (
    <div>
      <div></div>
      <BoardWrite isEdit={true} data={data} />
      <div></div>
    </div>
  );
}
