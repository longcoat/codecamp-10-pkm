//  import "../styles/globals.css";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
<<<<<<< Updated upstream
=======
import Head from "next/head";
>>>>>>> Stashed changes

// 모든 페이지에 셋팅해주기
function MyApp({ Component, pageProps }: AppProps) {
  return (
<<<<<<< Updated upstream
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
=======
    <>
      {/* <Head> 모든 페이지에서 카카오 맵을 다운로드 받으므로 비효율적임
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=0457afe40a10e00f115e2739ad089eb8"
        ></script>
      </Head> */}
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Global styles={globalStyles} />
            <Layout>
              <Component />
            </Layout>
          </>
        </ApolloSetting>
      </RecoilRoot>
    </>
>>>>>>> Stashed changes
  );
}

export default MyApp;
