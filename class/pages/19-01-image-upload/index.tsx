import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유: <input type="file" multiple /> 일 때, 여러개 드래그 가능
    console.log(file);

    const result = await uploadFile({
      variables: {
        file,
      },
    });
    console.log(result.data?.uploadFile.url);
    setImageUrl(result.data?.uploadFile.url ?? "");
    // 데이터 없으면 빈 문자열로 넣어줘~
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} multiple={true} />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}
