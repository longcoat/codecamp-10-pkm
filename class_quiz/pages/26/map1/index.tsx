import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=0457afe40a10e00f115e2739ad089eb8";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5481769, 127.0298261),
          level: 3,
        };
        // 127.0298261
        // 37.5481769
        const map = new window.kakao.maps.Map(container, options);
        console.log(map);

        const markerPosition = new window.kakao.maps.LatLng(
          37.5481769,
          127.0298261
        );

        const imageSrc = "/dogdogdog.jpeg", // 마커이미지의 주소입니다
          imageSize = new window.kakao.maps.Size(30, 40), // 마커이미지의 크기입니다
          imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );
        new window.kakao.maps.Marker({ position: markerPosition });

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage, // 마커이미지 설정
        });

        marker.setMap(map);

        // 마커가 드래그 가능하도록 설정합니다
        marker.setDraggable(true);
      });
    };
  }, []);

  return <div id="map" style={{ width: "500px", height: "400px" }}></div>;
}
