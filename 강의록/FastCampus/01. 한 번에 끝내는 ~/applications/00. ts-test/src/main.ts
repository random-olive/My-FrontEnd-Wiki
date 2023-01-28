//1. 기본용법 - 타입 정의
let hello: string = 'false';
hello = '123';
console.log(hello);

//2. 타입 종류
//string
let str: string; //일단 지금은 undefined라도, 추후에는 string이 부여되어야 함
let red: string = 'Red';
let green: string = 'Green';
let myColor: string = `My Color is ${red}`;
let yourColor: string = 'Your color is' + green;

//number
let num: number;
let integer: number = 6;
let float: number = 3.14;
let infinity: number = Infinity; //JS의 클래스
let nan: number = NaN; //숫자데이터

//boolean
let isBoolean: boolean;
let isDone: boolean = false;

//null and undefined => 거의 안 씀
let nul: null; //명시적 지정
let num2: number;
let und: undefined; //암시적 지정

//Variable 'nul' is used before being assigned : 초기화하지 않아서 나는 에러

nul = null; //에러 사라짐
num2 = 123; //에러 사라짐

console.log(nul);
console.log(und);
console.log(num2);

//array
const fruits: string[] = ['Apple', 'Banana', 'Cherry'];
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const union: (string | number)[] = ['Apple', 1];
//union 타입 : vertical bar로 묶이는 타입, 소괄호를 생략하면 string[] or number[]로 해석될 수 있다.
const array: [] = []; //앞에 타입을 명시하지 않으면 0개 원소의 배열만 가능

//object :: typeof DATA === 'object'인 obj는 모두 지정가능하다 --> 이런 식으로는 거의 안 씀
const obj: object = {};
const arr: object = [];
const func: object = function () {};

const userA: {
  //타입 지정을 객체로 묶음 -> 이런 형태는 매번 똑같이 쓰기 싫어서 재활용: interface
  name: string;
  age: number;
  isValid: boolean;
} = {
  name: 'Heropy',
  age: 85,
  isValid: true,
};

interface User {
  //interface는 PascalCase 사용 : 일반 변수와 비교하기 위함
  name: string;
  age: number;
  isValid: boolean;
}

const userB: User = {
  name: 'Neo',
  age: 22,
  isValid: false, //항목이 오타나거나, interface에 존재하지 않는 타입 유형이 있으면 에러 출력
};

//function
//타입 지정은 화살표 함수꼴을 사용하거나
const add: (x: number, y: number) => number = function (x, y) {
  return x + y;
};

const a: number = add(1, 2);

const hello2: () => void = function () {
  //원래 별도의 return이 없으면 undefined를 반환하지만, TS에서는 void라는 데이터 타입이 나온다.
  console.log('Hello World');
};

const h: void = hello2(); //즉, 함수 실행히 나오는 데이터를 변수에 할당할 필요가 없으면 void 사용

//매개변수에서 바로 할 수 있다.
const add2 = function (x: number, y: number): number {
  return x + y;
};

