import axios from "axios";
import { useEffect, useState } from "react";

export default function RestGetPage() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const onClickSync = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setTitle(result.data.message);
    };
    void onClickSync();
  }, []);

  return (
    <div>
      <img src={title}></img>
    </div>
  );
}
