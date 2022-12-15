import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (QQQ: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 먼저 해주세요!");
      void router.push("/23/hoc/login");
    }
  }, []);

  return (
    <>
      <QQQ {...props} />
    </>
  );
};
