import { useState } from "react";

export default function Hello() {
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    setCount(count + 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트증가</button>
    </>
  );
}
