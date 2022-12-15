// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
// import { Modal } from "antd";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  // ReactQuill 만든 사람들이 만든 onChange 이므로 event 안들어옴
  const onChangeContents = (value: string) => {
    console.log(value);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능!!
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐으니까 에러검증 같은것들 해달라고 react-hook-form에 알려주는 기능!!
    void trigger("contents");
  };

  //   useEffect(() => {
  //     async function aaa() {
  //       const { Modal } = await import("antd"); // code-splitting(코드스플릿팅)
  //       Modal.success({ content: "안녕하세요" });
  //     }
  //     void aaa();
  //   }, []);

  const onClickSubmit = async (data: any) => {
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

    const boardId = result.data?.createBoard._id;
    if (typeof boardId === "string")
      void router.push(`/27-04-web-editor-detail/${boardId}`);

    // event.preventDefault(); // onSubmit의 기본 기능(페이지 이동) 하지 못하게 막아줘!
    // const { Modal } = await import("antd"); // code-splitting(코드스플릿팅)
    // Modal.success({ content: "게시글 등록에 성공하였습니다!!!" });
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <button>등록하기</button>
    </form>
  );
}
