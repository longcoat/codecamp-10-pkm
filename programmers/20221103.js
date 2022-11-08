// 23.

function sum(num) {
  let count = 0;

  for (let i = 0; i <= num; i++) {
    count += i;
  }
  return count;
}

sum(5);

// 24.

function countLetter(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "A") {
      count = count + 1;
      console.log(str[i]);
    }
  }
  return count;
}
countLetter("I am from Korea");

function countLetter(str) {
  let count = 0;

  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      count = count + 1;
      console.log(str[i]);
    }
  }
  return count;
}

// 25.

function makeNumber(num) {
  let str = "";
  console.log(num);
  for (let i = 1; i <= num; i++) {
    str = str + i;
    if (num !== i) {
      str = str + "-";
    }
  }
  return str;
}

makeNumber(7);

// 26.

function makeOdd(num) {
  let str = "";
  console.log(num);
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      str = str + i;
    }
  }
  return str;
}

makeOdd(7);

//27

for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

const obj = {
  name: "훈이",
  age: 12,
};

for (let data in obj) {
  console.log(data, obj[data]);
}

const str = "abcde";

for (let index in str) {
  console.log(index, str[index]);
}

const arr = ["a", "b", "c", "d", "e"];
/// const arr = {0:'a' ,1:'b', 2:'c',...}
typeof arr;

// forEach

const arr = ["a", "b", "c", "d", "e"];

arr.forEach((el, i) => {
  console.log(el, i);
});

let answer = 0;
let current = 1;

while (current !== 100) {
  current++; // 1,2,3,......
  answer++; // 0,1,2,.......
}
// 여기까지만 돌리고 싶어요
answer;
