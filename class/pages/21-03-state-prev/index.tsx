import { useState } from "react";

export default function CounterStatePage() {
  // let count = 10
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    //  1.화살표함수
    setCount((prev) => prev + 1);

    // 2.함수선언식
    setCount(function (prev) {
      // 로직 추가 가능
      // if()등
      // for()등
      //  ,,,

      //  3.매개변수 바꾸기
      setCount((asdfsafasdfdf) => asdfsafasdfdf + 1);
      return prev + 1;
    });

    // count = count + 1 // let은 리액트 html에서 변경을 감지하지 못함
    setCount(count + 1); // state는 리액트 html에서 변경을 감지함(즉, document.get... 필요없음)
  }

  function onClickCountDown() {
    setCount(count - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
    </div>
  );
}
