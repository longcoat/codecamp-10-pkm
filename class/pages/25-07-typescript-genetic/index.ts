// 1. 문자/숫자/불린 (primitive) 타입

const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result = getPrimitive("보노보노", 123, true);

//
//
// 2. any 타입 -> 그냥 자바스크립트랑 같음 -> 결과 예측할 수 없음

const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
};

const result = getAny("보노보노", 123, true);

//
//
// 3. unknown 타입

const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
};

const result = getUnknown("보노보노", 123, true);

//
// 4. generic 타입 - 1 -> 내가 만드는 타입~

function getGeneric<MyType1, MyType2, Mytype3>(arg1: MyType1, arg2: MyType2, arg3: Mytype3): [Mytype3, MyType2, Mytype1] {
  return [arg3, arg2, arg1];
}

const result = getGeneric("보노보노", 123, true);

//
// 5. generic 타입 - 2 -> 내가 만드는 타입~

function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result = getGeneric2("보노보노", 123, true);

//
// 6. generic 타입 - 3 -> 내가 만드는 타입~

function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const result = getGeneric3("보노보노", 123, true);

//
// 7. generic 타입 - 4 -> 내가 만드는 타입~

const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const result = getGeneric4<string, number, boolean>("보노보노", 123, true);

// 뭐가 됐든지 너가 입력해서 써라~ 내가 타입 표시해줄게~(제공자입장)
