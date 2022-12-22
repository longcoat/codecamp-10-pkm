import { useRouter } from "next/router";

export default function BoardsDetailPage() {
  const router = useRouter();

  return (
    <div>
      안녕하세요 동적페이지입니다.
      <br />
      게시글아이디: {router.query.boardId}
    </div>
  );
}

export const getServerSideProps = () => {
  // 만약 서버사이드 랜더링을 한다면?? => out 폴더로 생성 불가
  //                           => next.config.js에서 exportPathMap으로 현재 페이지 제외시키기
};
