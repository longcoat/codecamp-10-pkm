import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { access } from "fs";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/stores";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  // 1. 뮤테이션
  const [longinUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  //  2. 글로벌 스테이트
  const [, setAccessToken] = useRecoilState(accessTokenState);

  // 3. 페이지이동
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
      // 1. 로그인 뮤테이션 날려서 accessToken 받아오기
      const result = await longinUser({
        variables: { email, password },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      // 2. 받아온 accessToken을 globalState에 저장하기
      if (accessToken === undefined) {
        Modal.error({
          content: "로그인에 실패했습니다!",
        });
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken); // 임시 사용()

      // 3. 로그인 성공 페이지로 이동하기
      void router.push("/23-02-login-localstorage-success");
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
