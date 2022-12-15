import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/stores";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert("로그인 후 이용 가능합니다!");
        void router.push("/30/login");
      }
    });
  }, []);

  return <Component {...props} />;
};
