import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
<<<<<<< Updated upstream
=======
  fromPromise,
  gql,
>>>>>>> Stashed changes
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
<<<<<<< Updated upstream
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
=======
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
>>>>>>> Stashed changes

interface IApolloSettingProps {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
<<<<<<< Updated upstream

=======
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);
  // 로딩 api통합
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
    // 1. 기존방식(refreshToken 이전)
    // const result = localStorage.getItem("accessToken") ?? "";

    // 2. 새로운방식(refreshToken 이후)
    void aaa.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  //  전송하다~ -> forward operation -> 실패한정보들이 들어있음
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2. refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken);

              // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리의 정보 수정하기
              if (typeof newAccessToken !== "string") return;
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // Authorization: Bearer asldkfjlasdk => 만료된 토큰이 추가되어 있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // 3-2. 토큰만 새걸로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-3. 방금 수정한 쿼리 재요청하기
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend10.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
>>>>>>> Stashed changes
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
