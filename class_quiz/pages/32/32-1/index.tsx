import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation ($file: Upload!) {
    uploadFile(file: $file) {
      _id
      url
      size
      isUsed
      createdAt
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function Day32QuizPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File>();

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file === undefined) return;
    console.log(file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        console.log(event.target?.result);
        setImageUrl(event.target?.result);
        setFile(file);
      }
    };
  };

  interface IBoardData {
    writer: string;
    password: string;
    title: string;
    contents: string;
    images: [];
  }

  const onClickSubmit = async (data: IBoardData) => {
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data?.uploadFile.url;
    console.log(url);

    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
          images: url,
        },
      },
    });

    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <div>
        작성자: <input type="text" {...register("writer")} />
      </div>
      <div>
        비밀번호: <input type="text" {...register("password")} />
      </div>
      <div>
        제목: <input type="text" {...register("title")} />
      </div>
      <div>
        내용: <input type="text" {...register("contents")} />
      </div>
      <div>
        <input type="file" onChange={onChangeFile} multiple={true} />
        <img src={imageUrl} />
      </div>
    </form>
  );
}
