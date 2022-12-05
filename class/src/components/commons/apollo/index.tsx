import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";

interface IApolloSettingProps {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 1.프리렌더링 예제 - process.browser 방법

  // if (process.browser) {
  //   console.log("지금은 브라우저다!!!!!");
  //   const result = localStorage.getItem("accessToken") ?? ""
  //   setAccessToken(result)
  // } else {
  //   console.log(
  //     "지금은 프론트엔드서버다!!!(즉 yarn dev로 실행시킨 프로그램 내부다!!!)"
  //   );
  // }

  //   // 2.프리렌더링 예제 - typeof window 방법
  // if (typeof window !== "undefined"){
  //     // 브라우저
  // } else {
  //   // 프론트엔드 서버
  // }

  // 3.프리렌더링 무시 - useEffect 방법
  useEffect(() => {
    // 브라우저
    const result = localStorage.getItem("accessToken") ?? "";
    setAccessToken(result);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend10.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 모두 임시로 저장해놓기
  });

  // prettier-ignore
  return (
    <>
      <div>안녕하세요 보노보노입니다</div>
      <ApolloProvider client={client}>
        {props.children}
        </ApolloProvider>
      <div>안녕하세요 너부리입니다</div>
    </>
  );
}
