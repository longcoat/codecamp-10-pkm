import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    try {
      //try에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든 줄들을 모두 무시!!!하고, catch에 있는 내용이 실행됨

      const result = await 나의함수({
        variables: {
          writer: "훈이",
          title: "안녕하세요!!",
          contents: "반갑습니다",
        },
      });
      console.log(result);
      console.log(result.data.createBoard.number);

      // router.push("/05-10-dynamic-routed-board-mutation/" + result.data.createBoard.number)
      router.push(
        `/05-10-dynamic-routed-board-mutation/${result.data.createBoard.number}`
      );
      //더하기 생략방식 (=탬플릿 리터럴))
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>;
}
