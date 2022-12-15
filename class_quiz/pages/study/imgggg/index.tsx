import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      _id
      url
      size
    }
  }
`;

export default function Yeni() {
  const fileRef = useRef(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [uploadImage, setUploadImage] = useState("");

  const onClickRef = () => {
    fileRef.current?.click();
  };

  const onChangeImage = async (event) => {
    const file = event.target.files?.[0];
    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      console.log(result);

      setUploadImage(result.data.uploadFile.url);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <button onClick={onClickRef}>이미지업로드</button>
      <img src={`https://storage.googleapis.com/${uploadImage}`} />
      <input
        type="file"
        ref={fileRef}
        onChange={onChangeImage}
        style={{ display: "none" }}
      />
    </>
  );
}
