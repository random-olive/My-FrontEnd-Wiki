//interface는 객체타입, 함수타입, 인덱스 가능타입 등을 지정할 수 있고, 확장(상속)도 가능하다.
//interface 이름은 PascalCase로

//1. 선택적 속성 - ? 연산자 : 선택적으로 속성 사용을 선택
//2. 읽기전용 속성 - readonly 키워드 : 값을 할당하는 것이 불가능
//3. 함수 타입 - 호출 시그니처 Call Signature
//4. 인덱스 가능 타입 - 인덱스 시그니처 Index Signature :: 객체의 값을 찾는 것을 인덱싱이라 한다.
//5. 확장(상속)

//1,2
interface User2 {
  name: string;
  readonly age: number;
  isValid?: boolean;
}

const neo: User2 = {
  name: 'Neo',
  age: 102,
};

//읽기전용 속성
neo.isValid = true;
neo.age = 32; //TS ERR : Cannot assign to 'age' because it is a read-only property.

//3. 함수 타입 - Call Signature
interface GetName {
  (param: string): string; //call signature: ()소괄호를 사용하는 문법
}

interface User3 {
  name: string;
  age: number;
  getName: GetName;
  //getName: (param: string) => string
}

const heropy: User3 = {
  name: 'Heropy',
  age: 85,
  getName(message: string) {
    console.log(message);
    return this.name;
  },
};

heropy.getName('Hello');

//4. 배열, 객체 타입 - Index Signature
//arr
interface Fruits {
  [item: number]: string; //index signature: []]소괄호를 사용하는 문법
}
const fruits2: Fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits2[1]); //item: number로 지정한 부분이 index로 나온다

//obj
interface User4 {
  [key: string]: unknown;
  name: string;
  age: number;
}

const heropy2: User4 = {
  name: 'Heropy',
  age: 85,
};
heropy2['isValid'] = true;
heropy2['emails'] = ['A@gmail.com', 'B@gmail.com'];
console.log(heropy2);

//obj
interface Payload {
  [key: string]: unknown;
}

function logValues(payload: Payload) {
  for (const key in payload) {
    console.log(payload[key]);
  }
}

//fail하는 interface
interface User5 {
  name: string;
  age: number;
  isValid: boolean;
}

//success하는 interface
interface User6 {
  [key: string]: unknown;
  name: string;
  age: number;
  isValid: boolean;
}

const heropy3: User5 = {
  //User6를 적용하면 TS 에러가 사라진다.
  //indexing 가능한 구조가 아니라서 할당 불가능
  name: 'Heropy',
  age: 85,
  isValid: true,
};

logValues(heropy3); //TS ERR: Argument of type... is not assignable to parameter of type ..

//5. 확장(상속)
//1) extends
interface UserA {
  name: string;
  age: number;
}

interface UserB extends UserA {
  isValid: boolean;
}

const heropy4: UserB = {
  name: 'aa',
  age: 23,
  isValid: true,
};

//2)
interface FullName {
  firstName: string;
  lastName: string;
}

interface FullName {
  middleName: string;
  lastName: boolean; //Subsequent property declarations must have the same type. Property '속성' must be of type '초기에 지정한 속성', but here has type '이후에 지정한 속성'
}

const fullName: FullName = {//모두 추가됨
  firstName: 'Thomas',
  middleName: 'Sean',
  lastName: 'Connery',
};
