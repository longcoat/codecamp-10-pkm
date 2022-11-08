1;

let name = "박광민";

4;

let fruits = [];

fruits = ["사과", "바나나", "파인애플"];

let newFruits = [];

newFruits.push(fruits[fruits.length - 1]);

8;

let student = {};

student.name = "철수";

9;

const student = {
  name: "철수",
  age: 8,
};

const school = {
  name: "다람쥐초등학교",
  teacher: "다람이",
};

student.school = school;

3;

const fruits = ["사과", "바나나", "파인애플"];

// fruits.push("사과")
// fruits.push("바나나")
// fruits.push("파인애플")

// fruits[0] = "사과"
// fruits[1] = "바나나"
// fruits[2] = "파인애플"

fruits;

4;
const fruits = ["사과", "바나나", "파인애플"];

const newFruits = [];

// newFruits.push(fruits[fruits.length-1])

newFruits.push(fruits.at(-1));

newFruits;

9;
const Obj = {
  name: "철수",
  age: 8,
  school: {
    name: "다람쥐초등학교",
    teacher: "다람이",
  },
};

let key = "age";

Obj.name;

Obj["name"];
Obj["school"]["name"];
Obj[key];

// 객체 지울 때 -> delete Obj.school 이런식으로

8;

const student = { name: "철수" };

// student.name = "철수"
// student['name'] = "철수"

student;

const student = {
  name: "철수",
  age: 8,
};

const school = 
  name: "다람쥐초등학교",
  teacher: "다람이",
};

9.

student;

school;

// student.school =  {name: "다람쥐 초등학교"}

// student.school.name = "다람쥐 초등학교"

student.school = school;
