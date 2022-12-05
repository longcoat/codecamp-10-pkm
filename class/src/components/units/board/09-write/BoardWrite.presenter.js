//UI

import * as styles from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  console.log(props);
  return (
    <div>
      작성자:{" "}
      <styles.RedInput
        type="text"
        onChange={props.onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer}
      />
      제목:{" "}
      <input
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      내용:{" "}
      <input
        type="text"
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <styles.BlueButton
        isActive={props.isActive}
        onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </styles.BlueButton>
    </div>
  );
}
