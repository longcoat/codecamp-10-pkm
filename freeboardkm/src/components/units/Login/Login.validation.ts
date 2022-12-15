import Password from "antd/lib/input/Password";
import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "이메일 형식에 맞게 작성해주세요"
    )
    .required("아이디를 입력해주세요"),
  password: yup.string().required("비밀번호를 입력해주세요"),
});

export const JoinSchema = yup.object({
  name: yup.string().required("이름을 입력해주세요"),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "이메일 형식에 맞게 작성해주세요"
    )
    .required("이메일주소를 입력해주세요"),
  password: yup.string().required("비밀번호를 입력해주세요"),
});
