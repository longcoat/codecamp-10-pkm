import { ChangeEvent, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./Boardwrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { Address } from "react-daum-postcode";
import { Modal } from "antd";
import { IBoardWriteProps } from "./BoardWrite.types";

export default function BoardWrite(props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [addressDetail, setAddressDetail] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [youtubeUrl, setYoutubeUrl] = useState();

  const onChangeWriter = (event) => {
    console.log(event);
    console.log("이벤트찍어본자리");
    console.log(setIsActive);
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }

    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }

    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
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
        console.log(result.data.createBoard._id);
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const onClickUpdate = async () => {
    if (!title && !contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: password,
          updateBoardInput: updateBoardInput,
        },
      });
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const handleComplete = (address: Address) => {
    onToggleModal();
    console.log("==========");
    console.log(address);
    console.log("==========");
    setZipcode((prev) => address.zonecode);
    setAddress((prev) => address.address);
  };

  const onChangeYoutubeUrl = (event) => {
    setYoutubeUrl(event?.target.value);
  };

  return (
    <BoardWriteUI
      isActive={isActive}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      address={address}
      zipcode={zipcode}
      addressDetail={addressDetail}
      isEdit={props.isEdit}
      data={props.data}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      isOpen={isOpen}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
    />
  );
}
