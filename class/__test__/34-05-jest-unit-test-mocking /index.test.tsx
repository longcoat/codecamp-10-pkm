import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import GraphqlMutationPage, {
  나의그래프큐엘셋팅,
} from "../../pages/34-05-jest-unit-test-mocking";
import { MockedProvider } from "@apollo/client/testing";
import { useRouter } from "next/router";

// 가짜 useRouter 만들기
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// 가짜 push 만들기
const push = jest.fn();

// 가짜 useRouter에 가짜 push 집어 넣기
(useRouter as jest.Mock).mockImplementation(() => ({
  push,
}));

// 가짜 mutation 만들기(요청, 응답 모두)
const mocks = [
  {
    request: {
      query: 나의그래프큐엘셋팅,
      variables: {
        createBoardInput: {
          writer: "철수",
          title: "안녕하세요",
          contents: "반갑습니다",
          password: "1234",
        },
      },
    },
    result: {
      data: {
        createBoard: {
          _id: "qqq",
          writer: "철수",
          title: "안녕하세요",
          contents: "반갑습니다",
        },
      },
    },
  },
];

it("버튼을 눌렀을 때, 제대로 작동하는지 테스트하자!", async () => {
  render(
    <MockedProvider mocks={mocks}>
      <GraphqlMutationPage />
    </MockedProvider>
  );

  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "철수" },
  });

  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "안녕하세요" },
  });

  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "반갑습니다" },
  });

  // TDD => 테스트를 먼저 만들자!
  // fireEvent.change(screen.getByRole("input-password"), {
  //   target: { value: "1234" },
  // });

  fireEvent.click(screen.getByRole("submit-button"));

  // 해당 컴포넌트 내의 나의함수를 기다리려면 바깥에서도 기다려야함
  await waitFor(() => {
    // expect(페이지주소).toBeCalledWith("/boards/qqq"); // 브라우저가 아니라 주소가 없음
    expect(push).toBeCalledWith("/boards/qqq");
  });
});
