import { Modal } from "antd";

export default function Day12QuizPage() {
  const onClickModal = () => {
    Modal.success({
      content: "게시글이 등록되었습니다!!",
    });
  };

  return (
    <>
      <button onClick={onClickModal}>모달열기!!</button>
    </>
  );
}
