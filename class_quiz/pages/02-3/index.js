import { useState } from "react";

export default function hello() {
  const [num, setNum] = useState("000000");

  function onClickAutoNum() {
    setNum(String(Math.floor(Math.random() * 100000)).padStart(6, "0"));
  }

  return (
    <>
      <div>{num}</div>
      <button onClick={onClickAutoNum}>인증번호전송</button>
    </>
  );
}
