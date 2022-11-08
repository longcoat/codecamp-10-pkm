export const getDate = (value) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  return `${yyyy}년 ${mm}월 ${dd}일`;
};

// year + "년" + month + "월" + date + "일"
//
