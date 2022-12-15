import { useRouter } from "next/router";
import LayoutBanner from "./banner/LayoutBanner.container";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  console.log(router);

  const isLoginPage = router.asPath.includes("/login");
  const isJoinPage = router.asPath.includes("/join");

  return (
    <>
      {/* <해더 />
      <네비게이션 /> */}
      {!isLoginPage && !isJoinPage && <LayoutBanner />}

      <div>{props.children}</div>
    </>
  );
}
