import Router, { useRouter } from "next/router";
import { Component, useEffect, useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    void router.push("/");
  };

  useEffect(() => {
    console.log("컴포넌트가 마운트됐습니다~");
  }, []);

  useEffect(() => {
    console.log("컴포넌트가 변경됐습니다~");
  }, [count]);

  useEffect(() => {
    return () => {
      alert("컴포넌트가 제거됩니다~");
    };
  }, []);

  console.log("마운트 시작");

  return (
    <>
      <div>카운트: {count}</div>
      <button onClick={onClickCounter}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}
