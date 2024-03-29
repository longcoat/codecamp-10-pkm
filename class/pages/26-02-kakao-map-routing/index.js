import { useRouter } from "next/router";
import Link from "next/link";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/26-03-kakao-map-routed");
  };

  return (
    <>
      <button onClick={onClickMove}>페이지 이동하기 !!!</button>
      {/* <a href="/26-03-kakao-map-routed">페이지 이동하기!!</a> 매 페이지를 새로 다운로드 받으므로 SPA를 활용 못함 */}
      <Link href="26-03-kakao-map-routed">
        <a>페이지이동하기 !!!</a>
      </Link>
      {/* next에서 제공하는 a태그이므로 SPA활용가능   */}

      {/* 시멘틱 태그의 장점 */}
    </>
  );
}
