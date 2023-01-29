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

//3. 타입 추론 (Inference) - 어떤 판단을 근거로 삼아 다른 판단을 이끌어 냄
// 기본값과 반환값이 명확하지 않은 경우 타입을 지정하면되고, 이는 코드에 가독성을 제공함
// 추론이 가능한 케이스

// 1) 초기화된 변수
let init = 12;
init = 'Hello'; //위에서 타입 지정을 하지 않아도 위에서 이미 추론됨 (매번 타입지정을 할 필요는 없음)

// 2) 기본값이 설정된 매개변수 'b' + 3) 반환값이 있는 함수 'add'
function example(a: number, b = 2) {
  return a + b;
}

//4. 타입 단언 (Assertions) - 딱 잘라 말함
//키워드(as)나 Non-null 단언 연산자 (!) 사용
//잘못사용될 수 있어 남발하기보다는, 타입 가드 등을 사용하는 것이 좋을 듯

//1-1) as
const el = document.querySelector('body') as HTMLBodyElement;
el.textContent = 'Hello world?!';
//ERR: Object is possibly 'null' , el : HTMLBodyElement | null
//-> querySelector의 특징상 HTML는 body 태그가 보통 있지만, TS는 script 코드에서만 추론, 타입 확인을 해서
//HTML에 body가 있는지 확인 불가 -> 이런 상황에 개발자가 body 태그가 있다고 assertion 한다

//1-2) ! : null이나 undefined가 아닐 경우를 명시할 때'만' 사용
const el2 = document.querySelector('body');
el2!.textContent = 'Hello world?!';

//1-3) 다만 body태그가 아니라 다른 클래스의 타입을 단언하는 것은 굳이 필요 x -> 잘못된 코드가 될 수 있다
const el3 = document.querySelector('.title');
el3!.textContent = 'Hello';
//예를 들어, 여기서는 해당 클래스가 없음에도 TS에러가 발생하지 않는다 (TS가 잡아내지 못하는 부분을 단언했으므로)
//이런 부분은 JS로 잡아낼 수 있게끔 코드를 수정한다

//1-4) Type guard:타입 가드 ->단언을 하지 않고도 el이 확정적일 때만 코드를 실행하는 방법
const el4 = document.querySelector('.title');
if (el4) {
  el4.textContent = 'Hello';
}

//2) 잘못된 코드임 - TypeError가 발생하므로
function getNumber(x: number | null | undefined) {
  return Number((x as number).toFixed(2));
}
getNumber(3.14);
getNumber(null); //ERR는 발생하지 않지만, console.log에서 확인하면
//TypeError: Cannot read properties of null (reading 'toFixed') 에러 발생
//즉, 들어오는 것은 가능한데 메서드 상에서 타입에러 발생

//2-1) 수정완료
function getNumber2(x: number | null | undefined) {
  if (x) {
    return Number(x.toFixed(2));
  }
}

//3)
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number((x as number).toFixed(2)); //이 경우 ! 사용 x
  }
  return (x as string).toUpperCase(); //이 경우 ! 사용 x
}
getValue('hello world', false); //'HELLO WORLD'
getValue(3.1415, true); //3.14

//5. 할당 단언 - !: TS에게 이미 할당이 되었다고 단언해서 에러출력 못하게
let num3: number;
console.log(num3); //number type이어야 하는데 콘솔로그에는 undefined -> TS에러: variable.. is used before being assigned

let num4!: number;
console.log(num4); //undefined로 나오지만 TS에러는 없음
num = 123; //위가 먼저 실행

//6. 타입 가드 Guards
//1)
function logText(el: Element) {
  console.log(el.textContent); //타입 가드를 사용해서 el.textContent에서 타입에러가 발생하지 않도록 한다.
}

const h1El = document.querySelector('h1');
if (h1El) {
  //단언 자체가 잘못되어서 TS에러는 발생하지 않지만 코드 작동에서는 타입에러가 발생할 수 있다
  logText(h1El);
}

//or
if (h1El instanceof HTMLHeadingElement) {
  logText(h1El);
}

//2) 4.단언의 //3번 케이스