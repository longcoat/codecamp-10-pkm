import * as P from "../../../units/product/write/ProductWrite.styles";

export default function UpLoadUI(props) {
  return (
    <>
      {props.fileUrl ? (
        <P.UploadImage1
          onClick={props.onClickImage}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <P.UploadButton type="button" onClick={props.onClickImage}>
          +<br /> Upload
        </P.UploadButton>
      )}
      <input
        type="file"
        style={{ display: "none" }}
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
