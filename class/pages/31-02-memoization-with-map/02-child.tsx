import { memo } from "react";

function Word(props: any) {
  console.log("자식이 렌더링 된비다!!, props.el");
  return <span>{props.el}</span>;
}

export default memo(Word);
