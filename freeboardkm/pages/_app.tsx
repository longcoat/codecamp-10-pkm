// 모든 페이지에 공통으로 적용될 "설정파일"입니다!
import "../styles/globals.css";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import ApolloSetting from "../src/components/commons/apollo/index";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  );
}

export default MyApp;
