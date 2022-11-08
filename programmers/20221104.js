// 41

function grade(score) {
  if (score > 100 || score < 0) return "잘못된 점수입니다.";

  if (score <= 100 && score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else if (score < 60) {
    return "F";
  }
}

// 42

const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];

function myPagd() {
  let count = 0;
  let amount = 0;
  let grade = "";

  for (let i = 0; i < myShopping.length; i++) {
    if (myShopping[i].category === "의류") {
      count++;
      amount += myShopping[i].price;
    }
  }
  if (count >= 0 && count <= 2) {
    grade = "Bronze";
  } else if (count > 3 && count >= 4) {
    grade = "Silver";
  } else if (count >= 5) {
    grade = "Gold";
  }
  return (
    "의류를 구매한 횟수는 총 " +
    count +
    "회 금액은 " +
    amount +
    "원이며 등급은" +
    grade +
    "입니다"
  );

  // ${}로 나중에 바꿔봐
}

myPage();
