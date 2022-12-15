import { Modal } from "antd";

export const checkValidationFile = (file?: File) => {
  if (typeof file === "undefined") {
    Modal.warning({
      content: "파일이 없습니다.",
    });
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    Modal.warning({
      content: "파일 용량이 너무 큽니다.(최대 5MB)",
    });
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    Modal.warning({
      content: "jpeg 파일 또는 png 파일만 업로드 가능힙니다.",
    });
    return false;
  }
  return true;
};
