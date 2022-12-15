<<<<<<< Updated upstream
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.validation";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  // boardAddress: {
  //   addressDetail: string;
  // };
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData) => {
    console.log(data);
  };

  console.log("리렌더링되나요?");
=======
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
>>>>>>> Stashed changes

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
<<<<<<< Updated upstream
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      제목: <input type="text" {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용: <input type="text" {...register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      {/* 주소: <input type="text" {...register("boardAddress.addressDetail;")} /> */}
      <button style={{ backgroundColor: formState.isValid ? "yellow" : "" }}>
        등록하기
      </button>
    </form>
  );
}

// <button type="button">나만의버튼(장바구니담기)</button>
// <button type="reset">지우기</button>
// <button type="submit">등록하기</button> -> 기본값
=======
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
>>>>>>> Stashed changes
