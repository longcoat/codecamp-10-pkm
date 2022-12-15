import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/stores";
import {
  IMutation,
  IMutationLoginUserExampleArgs,
} from "../../../src/commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  // 1. 뮤테이션
  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER);

  // 2. 글로벌스테이트
  const [, setAccessToken] = useRecoilState(accessTokenState);
  // 사용을 안하면 지워줄 수 있다. 단, 콤마는 지우면 안된다!

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
      const result = await loginUserExample({
        variables: { email, password },
      });

      const accessToken = result?.data?.loginUserExample?.accessToken;
      console.log(accessToken);

      // 2. 받아온 accessToken을 globalState에 저장하기
      if (accessToken === undefined) {
        Modal.error({ content: "로그인에 실패했습니다" });
        return;
      }
      setAccessToken(accessToken);

      // 3. 로그인 성공 페이지로 이동
      void router.push("/30/success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail} />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
