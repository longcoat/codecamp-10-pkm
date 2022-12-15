import { useRouter } from "next/router";
import LoginUI from "./Login.presenter";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";

export default function Login() {
  const router = useRouter();

  const [, setAccessToken] = useRecoilState(accessTokenState);
  return (
    <>
      <LoginUI />
    </>
  );
}
