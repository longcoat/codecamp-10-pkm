import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
// import {
//   IMutation,
//   IMutationUploadFileArgs,
// } from "../../src/commons/types/generated/types";

// const UPLOAD_FILE = gql`
//   mutation uploadFile($file: Upload!) {
//     uploadFile(file: $file) {
//       url
//     }
//   }
// `;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");

  // const [uploadFile] = useMutation<
  //   Pick<IMutation, "uploadFile">,
  //   IMutationUploadFileArgs
  // >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유: <input type="file" multiple /> 일 때, 여러개 드래그 가능
    console.log(file);
    if (file === undefined) return;

    // const result = await uploadFile({
    //   variables: {
    //     file,
    //   },
    // });
    // console.log(result.data?.uploadFile.url);
    // setImageUrl(result.data?.uploadFile.url ?? "");
    // 데이터 없으면 빈 문자열로 넣어줘~

    // // 1. 임시URL 생성 => (가짜URL - 내 브라우저에서만 접근 가능)
    // const result = URL.createObjectURL(file);
    // console.log(result);
    // setImageUrl(result);

    // 2. 임시URL 생성 => (진짜 URL - 다른 브라우저에서도 접근 가능)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target.resule === "string")
        console.log(event.target?.result); // 게시판에서 event.target.id를 쓰면 eslint가 잡았던 이유: event.target은 태그만을 가르키지 않음
      setImageUrl(event.target?.value);
    };
  };
  // 미리보기용으로만 씀~ 가급적 모든 브라우저 사용가능

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
    </>
  );
}
