import { useCallback, useMemo, useState } from "react";
import Day31ChildPage from "./child";

export default function Day31ParentPage() {
  console.log("렌더링");
  let countLet = 0;

  const [countState, setCountState] = useState(0);

  const onClickCountLet = useCallback(() => {
    countLet += 1;
    console.log(countLet);
  }, []);

  const onClickCountState = useCallback(() => {
    setCountState((prev) => prev + 1);
    console.log(countState);
  }, []);

  const qqq = useMemo(() => {
    return () => {
      console.log(countState + 1);
      setCountState(countState + 1);
    };
  }, []);

  return (
    <>
      <div>let : {countLet}</div>
      <button onClick={onClickCountLet}>카운트 올리기</button>
      <div>state : {countState}</div>
      <button onClick={onClickCountState}>카운트 올리기</button>

      <div>카운트(state) : {countState}</div>
      <button
        onClick={() => {
          console.log(countState + 1);
          setCountState((prev) => prev + 1);
        }}
      >
        카운트(state) +1 올리기
      </button>
      <Day31ChildPage />
    </>
  );
}
