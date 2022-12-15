import { Modal } from "antd";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";

export const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      Modal.warning({
        content: "로그인 후 이용 가능합니다!",
        afterClose() {
          void router.push("/login");
        },
      });
    }
  }, []);
};
