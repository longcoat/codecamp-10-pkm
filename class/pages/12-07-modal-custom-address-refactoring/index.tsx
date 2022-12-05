import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function ModalAlertPage() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
    // ///false를 가지고와서 트루로 바꿔줘!
  };
  const handleComplete = (address: Address) => {
    console.log(address);
    setIsOpen((prev) => !prev);
    onToggleModal();
  };

  return (
    <>
      <button onClick={onToggleModal}>모달창 열기!!</button>

      {/* 모달 종료 방식 - 1. 모달 숨기는 방법(ex, 이력서 등) */}
      {/* <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 종료 방식 -2. 모달 삭제하는 방법(ex, 신용카드, 비밀번호 등) */}
      {isOpen && (
        <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
