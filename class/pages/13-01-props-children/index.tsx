import PropsChildrenExample from "../../src/components/units/13-props-children-example";

export default function PropsChildrenPage() {
  return (
    <Example school="보노보노초등학교">
      <>
        <input type="text" />
        {/* 이거는 바뀜*/}
        <button>클릭해주세요</button> {/* 이거는 바뀜*/}
      </>
    </Example>

    // <div>게시글 등록 페이지</div>
    // <input type="text" />
  );
}
