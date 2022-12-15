import { memo } from "react";

function MemoizationChildPage() {
  console.log("자식이 렌더링 됩니다");

  return (
    <>
      <div>===============================</div>
      <div>저는 자식 컴포넌트 입니다!!!</div>
      <div>===============================</div>
    </>
  );
}

export default memo(MemoizationChildPage);
