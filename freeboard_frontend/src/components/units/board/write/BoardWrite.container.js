import { useState } from "react";
import {useMutation} from "@apollo/client" 
import {CREATE_BOARD} from "./BoardWrite.queries"
export default function BoardWrite() {

    const router = useRouter();
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
  
    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");
  
    const [createBoard] = useMutation(CREATE_BOARD);
  
    const onChangeWriter = (event) => {
      setWriter(event.target.value);
      if (event.target.value !== "") {
        setWriterError("");
      }
    };
  
    const onChangePassword = (event) => {
      setPassword(event.target.value);
      if (event.target.value !== "") {
        setPasswordError("");
      }
    };
  
    const onChangeTitle = (event) => {
      setTitle(event.target.value);
      if (event.target.value !== "") {
        setTitleError("");
      }
    };
  
    const onChangeContents = (event) => {
      setContents(event.target.value);
      if (event.target.value !== "") {
        setContentsError("");
      }
    };
  
    const onClickSubmit = async () => {
      if (!writer) {
        setWriterError("작성자를 입력해주세요.");
      }
      if (!password) {
        setPasswordError("비밀번호를 입력해주세요.");
      }
      if (!title) {
        setTitleError("제목을 입력해주세요.");
      }
      if (!contents) {
        setContentsError("내용을 입력해주세요.");
      }
      if (writer && password && title && contents) {
        try {
          const result = await createBoard({
            variables: {
              createBoardInput: {
                writer: writer,
                password: password,
                title: title,
                contents: contents,
              },
            },
          });
          console.log(result);
          alert("게시글이 등록되었습니다");
          router.push(`/02/${result.data.createBoard._id}`);
        } catch (error) {
          alert("뭔가 잘못 입력하셨습니다");
        }
      }
    };






    return(

    )
}