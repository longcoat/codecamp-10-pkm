import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import JestUnitTestPage from "../../pages/34-03-jest-unit-test-snapshot";

it("기존 사진이랑 바뀐게 없는지 비교해보자!! 스냅샷 테스트", () => {
  const result = render(<JestUnitTestPage />);
  expect(result.container).toMatchSnapshot();
  // 지금 그린 그림        기존에 찍은 사진
  //  없니? 그러면 사진 찍기 | 있니? 그러면 비교~
});
