import axios from "axios";
import { useEffect, useState } from "react";

export default function RestGetPage() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const onClickSync = async () => {
      const result = await axios.get("https://koreanjson.com/posts/1"); // 강아지 API로도 적용 가능
      console.log(result); // 제대로된 결과 => { title: "....." }
      console.log(result.data.title);
      setTitle(result.data.title);
    };
    void onClickSync();
  }, []);

  return <div>{title}</div>;
}
