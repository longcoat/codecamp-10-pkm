export const checkValidationFile = (file?: File) => {
  if (typeof file === "undefined") {
    alert("파일이 없어요!!");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 넘 커요!! (제한5MB)");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg파일 또는 png파일 업로드만 가능해요!!");
    return false;
  }
  return true;
};
