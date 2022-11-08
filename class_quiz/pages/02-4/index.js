import { useState } from "react";
import { ErrorMessage, EmailErrorMessage } from "../../styles/emotion1";

export default function signUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [chkPassword, setChkPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }
  function onChangeChkPassword(event) {
    setChkPassword(event.target.value);
  }
  function joinBtn() {
    if (email.includes("@") === false) {
      setError("이메일 형식이 올바르지 않습니다!! @를 포함하세요");
    } else {
      setError("");
    }

    if (password !== chkPassword) {
      setEmailError("비밀번호가 다릅니다!! 똑바로 입력해요");
    } else {
      setEmailError("");
    }
  }

  return (
    <div>
      <div>이메일</div>
      <input type="text" onChange={onChangeEmail} />
      <ErrorMessage>{error}</ErrorMessage>
      <div>비밀번호</div>
      <input type="password" onChange={onChangePassword} />
      <div>비밀번호 확인</div>
      <input type="password" onChange={onChangeChkPassword} />
      <EmailErrorMessage>{emailError}</EmailErrorMessage>
      <div>
        <button onClick={joinBtn}>가입하기</button>
      </div>
    </div>
  );
}
