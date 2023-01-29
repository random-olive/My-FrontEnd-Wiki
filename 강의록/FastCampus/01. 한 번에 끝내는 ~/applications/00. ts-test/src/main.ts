//1. 기본용법 - 타입 정의
let variable: string = 'false';
variable = '123';
console.log(variable);

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

const variableA: number = add(1, 2);

const variableB: () => void = function () {
  //원래 별도의 return이 없으면 undefined를 반환하지만, TS에서는 void라는 데이터 타입이 나온다.
  console.log('Hello World');
};

const variableC: void = variableB(); //즉, 함수 실행히 나오는 데이터를 변수에 할당할 필요가 없으면 void 사용

//매개변수에서 바로 할 수 있다.
const add2 = function (x: number, y: number): number {
  return x + y;
};

//any : 엄격한 타입관리로 인해 에러발생을 줄이기 위해 되도록 사용하지 않는다
let variableD: any = 'Hello world';
variableD = 123;
variableD = false;
variableD = null;
variableD = {};
variableD = [];
variableD = function () {};

//unknown : 일단 알수없음으로 표시 -> 많이 사용하는 편 (정확한 타입을 알 수 없는 경우)
const variableAny: any = 123;
const variableUnknown: unknown = 123;

const any: any = variableAny;
const boo: boolean = variableAny; //variableUnknown을 할당하면 에러발생
const numb: number = variableAny; //variableUnknown을 할당하면 에러발생
const arra: string[] = variableAny; //variableUnknown을 할당하면 에러발생
const obje: { x: string; y: number } = variableAny; //variableUnknown을 할당하면 에러발생

//tuple (..'개'의 요소로 된 집합 -> 배열 데이터의 개수까지 명시하는 경우 사용)
const tuple: [string, number, boolean] = ['a', 1, false];
const users: [number, string, boolean][] = [
  [1, 'A', true],
  [2, 'B', false],
];

//void : return 값이 없을 때 반환타입이 undefined가 아니라 'void'
function hello(msg: string): void {
  //타입에 undefined 할당시 오류 발생
  console.log(`Hello ${msg}`);
}
const hi: void = hello('world');

//never : 절대 발생하지 않을 값 -> 직접 사용할 일은 거의 없다 : 타입 지정이 잘못되지 않았는지 체크하기
const nev: [] = [];
nev.push(3); //에러발생

//union : vertical bar를 사용 : 동시에 여러 개의 타입 지정
let union2: string | number;
union2 = 'Hello';
union2 = 123;
union2 = false;

//intersection : &를 사용
interface Inter1 {
  name: string;
  age: number;
}

interface Inter2 {
  isValid: boolean;
}

const Inter: Inter1 & Inter2 = {
  name: 'A',
  age: 85,
  isValid: true,
};
