import Input01 from "../../commons/inputs/01";
import * as S from "./Login.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import Button01 from "../../commons/buttons/01";
import { useForm } from "react-hook-form";
import { schema } from "./Login.validation";
import { useRouter } from "next/router";
import { accessTokenState } from "../../../commons/stores";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./Login.queries";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRecoilState } from "recoil";

interface IFormData {
  email: string;
  password: string;
}

export default function LoginUI(props) {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onClickSubmit = async (data: IFormData) => {
    console.log(data);

    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });

      const accessToken = result?.data?.loginUser?.accessToken;

      if (accessToken === undefined) {
        Modal.warning({
          content: "로그인 후 이용해주세요 ",
        });
        return;
      }

      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      void router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <S.backgroundImg>
        <S.loginContainer>
          <S.LoginWrapper onSubmit={handleSubmit(onClickSubmit)}>
            {/* <S.LoginHeadoer></S.LoginHeadoer> */}
            <S.LoginBody>
              {/* <S.BodyWrapper1> */}
              Login
              <Input01
                type="text"
                placeholder="아이디를 입력하세요"
                register={register("email")}
              />
              <S.Error>{formState.errors.email?.message}</S.Error>
              Password
              <Input01
                type="password"
                placeholder="비밀번호를 입력하세요"
                register={register("password")}
              />
              <S.Error>{formState.errors.password?.message}</S.Error>
              {/* </S.BodyWrapper1> */}
              {/* <S.BodyWrapper2> */}
              <Button01 title="Login"></Button01>
              {/* </S.BodyWrapper2> */}
            </S.LoginBody>
          </S.LoginWrapper>
        </S.loginContainer>
      </S.backgroundImg>
    </>
  );
}
