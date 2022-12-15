import { useEffect, useRef } from "react";

export default function Day18Quiz() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      비밀번호 입력창
      <input type="password" ref={inputRef} />
    </>
  );
}
