import { useEffect, useState } from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
// import { Modal } from "antd";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage() {
  // ReactQuill 만든 사람들이 만든 onChange이므로 event 안들어옴
  const onChangeContents = (qqq: string) => {
    console.log(qqq);
  };

  const onClickSubmit = async (event) => {
    event.preventDefault();
    const { Modal } = await import("antd"); // code-splitting(코드스플릿팅)
    Modal.success({ content: "게시글 등록에 성공하였습니다!!!" });
  };
  // 누를때만 모달 임폴트해서 쓰겠다~

  return (
    <form onSubmit={onClickSubmit}>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <button>등록하기</button>
    </form>
  );
}
