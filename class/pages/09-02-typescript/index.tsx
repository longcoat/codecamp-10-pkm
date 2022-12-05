export default function TypescriptPage() {
  // 타입추론
  let aaa: string = "안녕하세요";

  aaa = 3;

  // 타입명시
  let bbb: string = "반갑습니다";

  bbb = 10;

  // 타입 명시가 필요한 상황
  let ccc: number | string = 1000;
  ccc = "1000원";

  // 숫자타입
  let ddd: number = 10;
  ddd = "철수";

  //불린타입
  let eee: boolean = true;
  eee = false;
  eee = "false"; //true로 작동함

  //배열타입
  let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"]; //어떠한 타입을 담을지 배열앞에 붙여줌
  let ggg: string[] = ["철수", "영희", "훈이", 10];
  let hhh: (string | number)[] = ["철수", "영희", "훈이", 10]; // 타입을 추론해서 어떤 타입을 사용하는지 알아보기!!

  //객체타입
  interface Iprofile {
    name: string;
    age: number | string;
    scholl: string;
    hobby?: string; //있어도 되고 없어도 되는애~
  }

  const profile: IProfile = {
    name: "보노보노",
    age: 8,
    school: "보노보노초등학교",
  };
  profile.name = "훈이"; //타입추론으로 이것만 가능
  profile.age = "8살"; //타입추론 끝나서 안됨 무조건 넘버만 됨
  profile.hobby = "수영"; //프로필 안에는 하비라는게 없음 무조건 꼭 맞춰서 해야함 타입은

  //함수타입 -> 어디서 몇번이든 호출 가능하므로, 타입추론 할 수 없음(반드시 명시 필요!!!)
  function add(num1: number, num2: number, unit: string): string {
    //unit = 단위 //any -> 뭐든 가능하다는 것
    return num1 + num2 + unit;
  }
  const result = add(1000, 2000, "원"); //결과의 리턴 타입도 예측가능!! 48번라인 끝 string 봐바

  //화살표 함수로 한번 해보기
  const add2 = (num1: number, num2: number, unit: string): string => {
    //unit = 단위 //any -> 뭐든 가능하다는 것
    return num1 + num2 + unit;
  };
  const result2 = add(1000, 2000, "원");

  //any타입 ->안정성 포기하더라도 그냥 넣자~
  let qqq: any = "철수"; //자바스크립트와 동일<!DOCTYPE html>
  qqq = 123;
  qqq = true;

  return <div></div>;
}
