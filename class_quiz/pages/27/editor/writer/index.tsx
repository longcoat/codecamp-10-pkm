import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

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

export default function Day27QuizPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value);
    void trigger("contents");
  };
  const onClickSubmit = async (data) => {
    console.log(data);
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
    });

    const { Modal } = await import("antd");
    Modal.success({
      content: "게시글 등록에 성공하였습니다!!",
      afterClose() {
        const boardId = result.data.createBoard._id;
        if (typeof boardId === "string")
          void router.push(`/27/editor/detail/${boardId}`);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <input type="text" {...register("writer")} />
      <br />
      비밀번호 : <input type="password" {...register("password")} />
      <br />
      제목 : <input type="text" {...register("title")} />
      <br />
      내용 : <ReactQuill theme="snow" onChange={onChangeContents}></ReactQuill>
      <button>등록하기!!!!!</button>
    </form>
  );
}
