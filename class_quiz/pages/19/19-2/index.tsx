// 1. 게시물을 작성하기 위한 작성자, 비밀번호, 제목, 내용 4개의 입력창을 만들어 주세요.
// 2. 이미지를 올릴 file 태그를 만들어 주세요.
// 3. file 태그를 활용해 이미지가 변경되면 uploadFile API를 사용하여 이미지를 업로드 해 주세요.
// 4. 업로드한 결과로 받은 url을 state에 저장하여 업로드된 이미지가 화면에 나타나도록 만들어 주세요.
// 5. [저장하기] 버튼을 만들고, 해당 버튼을 클릭하면, createBoard API를 활용하여 작성자, 비밀번호, 제목, 내용, 이미지URL을 등록해 주세요.
// 6. file 태그를 숨기고, 좋아요 아이콘을 누르면 file 태그가 눌리도록 연결해 보세요.
// ⇒ 힌트) useRef를 사용해 주세요.
//     힌트) 좋아요 아이콘은 ant-Design에 있습니다.

import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState, useRef } from "react";
import { checkValidationFile } from "../../../src/commons/libraries/validationFile";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function QuizImageUpload() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [createBoard] = useMutation(나의그래프큐엘셋팅);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({
      variables: {
        file,
      },
    });

    console.log("====리절트리절트==");
    console.log(result.data?.uploadFile.url);
    console.log("======");
    setImageUrl(result.data?.uploadFile?.url ?? "");
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickBtn = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images: [imageUrl],
        },
      },
    });
    alert("등록되었습니다!!");
    console.log(result);
  };
  return (
    <>
      <div
        style={{ width: "60px", height: "60px", backgroundColor: "red" }}
        onClick={onClickImage}
      >
        이미지선택
      </div>
      작성자
      <input type="text" onChange={onChangeWriter} />
      비밀번호
      <input type="text" onChange={onChangePassword} />
      제목
      <input type="text" onChange={onChangeTitle} />
      내용
      <input type="text" onChange={onChangeContents} />
      <br></br>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        multiple={true}
        ref={fileRef}
        accept="image/jpeg,image/png"
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      <button onClick={onClickBtn}>등록하기</button>
    </>
  );
}
