export default function BoardRegist() {
  return (
    <div className="container">
      <div className="header">
        <h1>게시물 등록</h1>
      </div>
      <div className="body">
        <div>
          <p>작성자</p>
          <input type="text" placeholder="이름을 적어주세요"></input>
        </div>
        <div>
          <p>비밀번호</p>
          <input type="password" place holder="비밀번호를 입력하세요"></input>
        </div>
        <div>
          <p>제목</p>
          <input type="text" placeholder="제목을 작성해 주세요"></input>
        </div>
        <div>
          <p>내용</p>
          <input type="text" placeholder="내용을 작성해주세요"></input>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}
