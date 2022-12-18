// 개발자일 때 => 디스코드, 카카오톡, 슬랙 등

import axios from "axios";

export default function OpengraphDeveloperPage() {
  const onClickEnter = async () => {
    // 1. 채팅데이터에 주소가 있는지 찾기(ex. http://~~로 시작하는 것)

    // 2. 해당 주소로 스크래핑하기
    const result = await axios.get("https://www.gmarket.co.kr");
    // CORS : https://www.naver.com/ cors문제로 naver는 스크래핑 불가, 따라서 모바일앱이나 백엔드에서 스크래핑<!DOCTYPE html>

    console.log(result);

    // 3. 메타태그에서 오픈그래프(og:) 찾기
    result.data.split("<meta>").filter((el) => el.includes("og:"));
  };

  return <button onClick={onClickEnter}>채팅입력 후 엔터치기!!</button>;
}
