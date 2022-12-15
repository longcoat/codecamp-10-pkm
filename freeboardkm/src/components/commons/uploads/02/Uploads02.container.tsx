import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import { checkValidationFile } from "../../../../commons/libraries/validationFile";
import UpLoadUI from "./Uploads02.presenter";
import { UPLOAD_FILE } from "./Uploads02.queries";

export default function UpLoad(props) {
  console.log(props);
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    const isValid = checkValidationFile(file);
    if (isValid === undefined) return;
    if (file === undefined) return;

    console.log(file);
    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result);
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <UpLoadUI
        fileUrl={props.fileUrl}
        fileRef={fileRef}
        onClickImage={onClickImage}
        onChangeFile={onChangeFile}
      />
    </>
  );
}
