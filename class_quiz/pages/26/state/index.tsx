import { gql, useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input01 from "../../../src/components/commons/inputs/01";
import { schema } from "../../24/validation";

const FETCH_BOARDS = gql`
  query ($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
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

interface IFormData {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export default function Day26QuizPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId: string) => () => {
    void deleteBoard({
      variables: {
        boardId,
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deletedId = data.deleteBoard;
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickCreate = (data: IFormData) => {
    void createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <div>
      <div style={{ display: "flex", height: "52px" }}>
        <div style={{ width: "10%" }}>ID</div>
        <div style={{ width: "20%" }}>제목</div>
        <div style={{ width: "20%" }}>내용</div>
        <div style={{ width: "10%" }}>작성자</div>
      </div>
      {data?.fetchBoards.map((el) => (
        <div style={{ display: "flex", height: "52px" }} key={el._id}>
          <div style={{ width: "10%" }}>
            {" "}
            {String(el._id).slice(-4).toUpperCase()}
          </div>
          <div style={{ width: "20%" }}>{el.title}</div>
          <div style={{ width: "20%" }}>{el.contents}</div>
          <div style={{ width: "10%" }}>{el.writer}</div>
          <button
            style={{ width: "100px", height: "35px" }}
            onClick={onClickDelete(el._id)}
          >
            X
          </button>
        </div>
      ))}
      <form onSubmit={handleSubmit(onClickCreate)}>
        작성자:
        <Input01 type="text" register={register("writer")} />
        <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
        비밀번호:
        <Input01 type="password" register={register("password")} />
        <div style={{ color: "red" }}>{formState.errors.password?.message}</div>
        제목:
        <Input01 type="text" register={register("title")} />
        <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
        내용:
        <Input01 type="text" register={register("contents")} />
        <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
        <button style={{ width: "100px", height: "35px" }}>등록하기</button>
      </form>
    </div>
  );
}
