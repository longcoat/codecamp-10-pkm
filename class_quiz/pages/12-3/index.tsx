import { Modal } from "antd";
import React, { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function Day12QuizPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [add, setAdd] = useState("");
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (a) => {
    console.log(a.address);
    // setIsOpen((prev) => !prev);
    onToggleModal(); //창닫힘
    setAdd((prev) => a.address);
  };

  return (
    <>
      <button onClick={onToggleModal}>주소창열기</button>
      {add}
      {isOpen && (
        <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
