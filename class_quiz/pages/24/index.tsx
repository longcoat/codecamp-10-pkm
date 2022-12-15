import { useForm } from "react-hook-form";
import Button01 from "../../src/components/commons/buttons/01";
import Input01 from "../../src/components/commons/inputs/01";
import { schema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormData {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export default function QuizPage() {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
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
      <Button01 title="등록하기" isActive={formState.isValid}></Button01>
    </form>
  );
}
