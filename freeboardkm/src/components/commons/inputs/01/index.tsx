import * as S from "../../../units/Login/Login.styles";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type: "text" | "password";
  placeholder?: string;
  register: UseFormRegisterReturn;
}

export default function Input01(props: IInputProps) {
  return (
    <>
      <S.InputBox
        type={props.type}
        placeholder={props.placeholder}
        {...props.register}
      />
    </>
  );
}
