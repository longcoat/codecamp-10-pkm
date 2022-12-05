// 1. 함수를 리턴하는 함수

// function aaa() {
//   const apple = 10;

//   return function bbb() {
//     const banana = 20;
//     console.log(banana);
//     console.log(apple);
//   }
// }

// aaa();

// //
// //
// // 2. 함수를 리턴하는 함수 - 인자가 있는 경우

// function aaa(apple) {
//     const apple = 10;

//    return function bbb() {
//       const banana = 20;
//       console.log(banana);
//       console.log(apple);
//     }
//   }

//   aaa(10)(20);

// function qqq () {

// }

// const qqq =  () => {

// }
//   //
//
// 3. 함수를 리턴하는 함수 - 화살표 함수로 바꿔보기~

const aaa = (apple) => (banana) => {
  console.log(banana);
  console.log(apple);
};

aaa(10)(20);

// 4. 함수를 리턴하는 함수 -   인자 3개

const aaa = (apple) => (banana) => (tomato) => {
  console.log(banana);
  console.log(apple);
  console.log(tomato);
};

aaa(10)(20)(30);
