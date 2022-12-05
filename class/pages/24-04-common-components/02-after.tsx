import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.validation";
import Input01 from "../../src/components/commons/inputs/01";
import Button01 from "../../src/components/commons/buttons/01";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  // boardAddress: {
  //   addressDetail: string;
  // };
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState} = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData) => {
    console.log(data);
  };

  console.log("리렌더링되나요?");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <Input01 type={"text"} register={register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      제목: <Input01 type={"text"} register={register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용: <Input01 type={"text"} register={register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      {/* 비밀번호: <Input01 type= "password" /> */}
      {/* 주소: <input type="text" {...register("boardAddress.addressDetail;")} /> */}
      <Button01 title="등록하기" isActive={formState.isValid} />
    </form>
  );
}

// <button type="button">나만의버튼(장바구니담기)</button>
// <button type="reset">지우기</button>
// <button type="submit">등록하기</button> -> 기본값
