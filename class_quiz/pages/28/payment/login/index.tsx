import { gql, useMutation } from "@apollo/client";
import { Form } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const LOGIN_USER = gql`
  mutation ($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function QuizPage() {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const onClickSubmit = async (data) => {
    console.log(data);
    await loginUser({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
    router.push("/28/payment/loading");
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일: <input type="text" {...register("email")} />
      비밀번호: <input type="password" {...register("password")} />
      <button>로그인하기</button>
    </form>
  );
}
