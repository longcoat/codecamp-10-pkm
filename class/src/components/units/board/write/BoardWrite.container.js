import { useMutation } from "@apollo/client";
import { useState } from "react";

import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries"; // export 가져오기
import BoardWriteUI from "./BoardWrite.presenter";
//  export default 가져오기
// import sdfsdf from "BoardWrite.presenter";
//export default 이름바꿔서 가져오기
// import sdfsdf, { 나의그래프큐엘셋팅 }from "BoardWrite.presenter";
// export default와 export 함께 가져오기

// import * as qqq from './BoardWrite.styles'
// qqq.BlueButton
// qqq.RedInput
// export 한방에 다 가져오기

export default function BoardWrite() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables 이게 $ 역할을 함
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <div>
      <div>aaaaaaaaa</div>
      <BoardWriteUI
        aaa={onClickSubmit}
        bbb={onChangeWriter}
        ccc={onChangeTitle}
        ddd={onChangeContents}
      />
      <div>aaaaaaaaa</div>
    </div>
  );
}
