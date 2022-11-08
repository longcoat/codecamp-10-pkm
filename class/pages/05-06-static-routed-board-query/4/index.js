import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 4) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARD);
  // 접속하자마자 바로api날라감~ 나의함수 이런거 필요없음

  console.log("=======");
  console.log(data);
  console.log("=======");

  //두번 실행 됨을 보여주기 위한 콘솔로그 !! 한번 직접 봐바

  return (
    <div>
      <div>4번게시글로 이동이 완료되었습니다.</div>
      <div>작성자: {data && data.fetchBoard.writer} </div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data ? data.fetchBoard.contents : "로딩중입니다!!!"}</div>
    </div>
    //data && -> 데이터가 있으면 그떄 보여줄래~?데이터 있으면 && 오른쪽을 보여주고 데이터 없으면~ && 왼쪽을 보여줘~~
    // 조건부 랜더링! data? -> 옵셔널 체이닝  data && data -> data?로 바꿈
  ); //29번라인 -> ?기준으로 참이면 : 왼쪽께 나오고 거짓이면 : 오른쪽 부분 나옴
  // 옵셔널 체이닝을 가장 많이 씀
}
