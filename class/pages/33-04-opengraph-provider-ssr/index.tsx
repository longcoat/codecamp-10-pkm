// 제공자일 때 => 네이버, 다음, 쿠팡

import { gql, useQuery } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../src/commons/types/generated/types";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default function OpengraphProviderPage(props: any) {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: {
      useditemId: "639a8202531bd200286b7839",
    },
  });

  console.log(props);

  return (
    <>
      <Head>
        <meta property="og:title" content={props?.qqq.name} />
        <meta property="og:description" content={props?.qqq.remarks} />
        <meta property="og:image" content={props?.qqq.images?.[0]} />
      </Head>
      <div>중고마켓에 오신 것을 환영합니다! (여기는 Body입니다.)</div>
    </>
  );
}

// getServerSideProps는 반드시 이 이름으로 작성이되어야 하고(nextjs에서 정의해놓은 것), 페이지에서만 작성이 가능하다.
// 컴포넌트 기준이 아니라 페이지 기준!!

// 1. getServerSideProps는 존재하는 단어이므로 변경 불가능
// 2. 여기는 서버에서만 실행됨(프론트엔드 서버프로그램 - webpack 서버)
export const getServerSideProps = async () => {
  console.log("여기는 서버입니다.");

  // 1. 여기서 API 요청
  const graphQLClient = new GraphQLClient(
    "https://backend10.codebootcamp.co.kr/graphql"
  );

  const result = await graphQLClient.request(FETCH_USEDITEM, {
    useditemId: "639a8202531bd200286b7839",
  });

  console.log(result);

  // 2. 받은 결과를 return => 해당 페이지의 props로 들어감(props.data로 사용가능)
  return {
    props: {
      qqq: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images[0],
      },
    },
  };
};
