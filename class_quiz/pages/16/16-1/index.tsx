import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Modal } from "antd";

export default function Class16Quiz() {
  const [isChange, setIsChange] = useState(false);
  const router = useRouter();

  const onClickChange = () => {
    setIsChange((prev) => !prev);
  };

  const onClickMove = () => {
    void router.push("/");
  };

  useEffect(() => {
    Modal.warning({
      content: "Rendered",
    });
  }, []);

  useEffect(() => {
    Modal.warning({
      content: "Changed",
    });
  }, [isChange]);

  useEffect(() => {
    return () => {
      Modal.warning({
        content: "Bye",
      });
    };
  }, []);
  return (
    <>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </>
  );
}
