import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KaKaoMapPage() {
  useEffect(() => {
    console.log("qqq");
    const script = document.createElement("script"); // <script></script>
    console.log("WWW");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=0457afe40a10e00f115e2739ad089eb8";
    console.log("EEE");

    document.head.appendChild(script);
    console.log("GGG");

    script.onload = () => {
      console.log("HHH");
      window.kakao.maps.load(function () {
        console.log("GGG");
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        console.log(map);

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }, []);

  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=0457afe40a10e00f115e2739ad089eb8"
        ></script>
      </Head> */}
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </>
  );
}
