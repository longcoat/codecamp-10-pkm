import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function RestGetPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const {formState} = useForm()
  // formState.isSubmitting

  //  게시글 등록하기 버튼이라고 가정!!
  const onClickSync = async () => {
    setIsSubmitting(true);
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result); // 제대로된 결과 => {title: "...."}
    console.log(result.data.title);

    setIsSubmitting(false);
  };
  return (
    <div>
      <button onClick={onClickSync} disabled={isSubmitting}>
        REST-API(동기)요청하기
      </button>
    </div>
  );
}
