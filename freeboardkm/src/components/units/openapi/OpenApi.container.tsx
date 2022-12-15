import { MouseEvent, useEffect, useState } from "react";
import OpenApiUI from "./OpenApi.presenter";
import axios from "axios";
import { useRouter } from "next/router";

export default function OpenApi() {
  const [youtubeList, setYoutubeList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCNzul4dnciIlDg8BAcn5-cQ&maxResults=50&key=AIzaSyAsbrR0QEHYugoT79ErA2aPoO1PEQuZzog"
      )
      .then((res) => {
        console.log(res);
        setYoutubeList(res.data.items);
      })
      .catch(() => {});
  }, []);

  const onClickYoutube = (event: MouseEvent<HTMLImageElement>) => {
    let link = event.currentTarget.id;
    link = link.split("/");

    void router.push(`https://www.youtube.com/watch?v=${link[4]}`);
    console.log(link);
  };

  return (
    <OpenApiUI youtubeList={youtubeList} onClickYoutube={onClickYoutube} />
  );
}
