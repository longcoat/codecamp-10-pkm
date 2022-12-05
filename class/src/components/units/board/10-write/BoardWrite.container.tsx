//로직(기능)

import { useMutation, useReactiveVar } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { UPDATE_BOARD, 나의그래프ql셋팅 } from "./BoardWrite.queries";

import BoardWriteUI from "./BoardWrite.presenter";
import { useRouter } from "next/router";

import { IBoardWriteProps } from "./BoardWrite.types";
import { IMyVariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프ql셋팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    router.push(`/09-01-boards/${result.data.createBoard.number}`);
  };

  const onClickEdit = async () => {
    const myvariables: IMyVariables = {
      number: Number(router.query.number),
    };
    if (writer !== "") myvariables.writer = writer;
    if (title !== "") myvariables.title = title;
    if (contents !== "") myvariables.contents = contents;

    const result = await updateBoard({
      variables: myvariables,
    });
    console.log(result);
    router.push(`/09-01-boards/${result.data.updateBoard.number}`);
  };

  // 원래는 우리가 이렇게 만들었었어야함
  // interface IEvent {
  //     target: {
  //         id: string
  //         value: string
  //     }
  // }

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value && title && contents) {
      setIsActive(true);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) {
      setIsActive(true);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) {
      setIsActive(true);
    }
  };

  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isActive={isActive}
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
      data={props.data}
    />
  );
}
