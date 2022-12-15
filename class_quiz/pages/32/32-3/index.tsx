import { preloadImage } from "../../../src/commons/libraries/preloadimage";
import { useEffect, useState } from "react";

const PRELOAD_IMAGES = [
  `https://i.pinimg.com/280x280_RS/2d/1f/c0/2d1fc037339fd32587bb423caca59d94.jpg`,
];

export default function preloadImagePage() {
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    preloadImage(PRELOAD_IMAGES);
  }, []);

  const onClickShowMe = () => {
    setImgUrl(PRELOAD_IMAGES);
  };

  return (
    <>
      <button onClick={onClickShowMe}>이미지 보여주기</button>
      <img src={imgUrl} />
    </>
  );
}
