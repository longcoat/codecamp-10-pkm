import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { access } from "fs";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/stores";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../src/commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: { email, password },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      if (accessToken === undefined) {
        Modal.error({
          content: "로그인에 실패했습니다!",
        });
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      void router.push("/23-09-login-check-hoc-success");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
