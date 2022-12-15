import { useRouter } from "next/router";
import { useEffect } from "react";
<<<<<<< Updated upstream
export const withAuth = (ABC: any) => (props: any) => {
  const router = useRouter();
  // 로그인체크
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다");
      void router.push("/23-03-login-check");
    }
=======
import { useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { restoreAccessTokenLoadable } from "../../../commons/stores";
export const withAuth = (ABC: any) => (props: any) => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);
  // 로그인체크(refreshtoken 이전)
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken") === null) {
  //     alert("로그인 후 이용 가능합니다");
  //     void router.push("/23-03-login-check");
  //   }
  // }, []);

  // 로그인체크(refreshtoken 이후)
  useEffect(() => {
    // 안좋음)이건 _app.tsx에 이어서 총 2번 요청하게됨
    // getAccessToken().then((newAccessToken) => {
    //   if (newAccessToken === undefined) {
    //     alert("로그인 후 이용 가능합니다");
    //     void router.push("/23-03-login-check");
    //   }
    // });
    // 좋음) 함수를 공유하므로 _app.tsx에 이어서 총1번만 요청하게됨
    void aaa.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert("로그인 후 이용 가능합니다");
        void router.push("/23-03-login-check");
      }
    });
>>>>>>> Stashed changes
  }, []);

  return <ABC {...props} />;
};
