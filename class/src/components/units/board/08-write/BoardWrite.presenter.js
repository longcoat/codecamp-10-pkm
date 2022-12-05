import { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <div>
      <div>bbbbbbbbb</div>
      작성자: <RedInput type="text" onChange={props.bbb} />
      제목: <input type="text" onChange={props.ccc} />
      내용: <input type="text" onChange={props.ddd} />
      <BlueButton
        qqq="yellow"
        zzz={props.eee}
        onClick={props.fff ? props.ggg : props.aaa}
      >
        {props.fff ? "수정하기" : "등록하기"}
      </BlueButton>
      <div>bbbbbbbbb</div>
    </div>
  );
}
