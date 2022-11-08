import { useState } from "react";

export default function hi() {
  const [word, setWord] = useState("안녕하세요");

  function ChangeBtn() {
    setWord("반갑습니다");
  }

  return (
    <>
      <button onClick={ChangeBtn}>{word}</button>
    </>
  );
}
