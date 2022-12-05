import Router, { useRouter } from "next/router";
import { Component, useEffect, useState } from "react";

export default function ClassCounterPage (){
 const [count, setCount] = useState(0)
 const router = useRouter()


 useEffect(() => {
  console.log("그려지고 나서 실행!!")
 }, [])

 useEffect(() => {
  console.log("변경되고 나서 실행!!")
 })

 useEffect(() => {

  return () => {
    console.log("사라질 때 실행!!")
  }
 },[])

// 1. useEffect 사용법: 하나로 합치기 가능
// useEffect(() => {
//   console.log("그려지고 나서 실행!!")
//     return () => {
//     console.log("사라질 때 실행!!")
//   }
// },[count])

// 2. useEffect의 잘못된 사용법: (1.추가렌더링, 2.무한루프)
// useEffect(() => {
//   setCount((prev) => prev + 1)
// },[count])
// 가급적 useEffect에서 setState는 피하자!!



  const onClickCountUp = () => {
    console.log(count);
    setCount(prev => prev + 1)
    };
  };

  const onClickMove = () => {
    void Router.push("/");
  };

  console.log("나는 언제실행되게~~~~~ 오이시쿠나레~")
    return (
      <>
        <div>{count}</div>
        <button onClick={onClickCountUp}>카운트 올리기!!!!</button>
        <button onClick={onClickMove}>나가기!!</button>
      </>
    
    )
}

// class Monster {

//     power = 50

//     attack(){
//         console.log("공격하라!!!!!")
//     }
// }

// class 슈퍼몬스터 extends Monster{           => 상속
//     run(){
//         console.log("도망쳐!!!!!!")
//     }
//     // 오버라이딩  (위에꺼 어택 무시되고 밑에꺼가 인정됨)
//     attack () {

//     }
// }

// const mymonster = new Monster()
// mymonster.attack()
// mymonster.power

// const 나의슈퍼몬스터 = new 슈퍼몬스터()
// 나의슈퍼몬스터.attack()
// 나의슈퍼몬스터.run()
