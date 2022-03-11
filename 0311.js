// var x = 'global';

// function foo() {
//   console.log(x); // ①
//   var x = 'local';
// }

// foo();
// console.log(x); // global

// function foo() {
//     var x = 'local';
//     console.log(x); // local
//     return x;
//   }
  
//   foo();
//   console.log(x); // ReferenceError: x is not defined


// var x = 'global';

// function foo() {
//     var x = 'local';
//     console.log(x); // ①
//     return x;
// }

// foo();
// console.log(x); // global

// var x = 1;

// if (true) {
//   // x는 전역 변수다. 이미 선언된 전역 변수 x가 있으므로 x 변수는 중복 선언된다.
//   // 이는 의도치 않게 변수값이 변경되는 부작용을 발생시킨다.
//   var x = 10;
// }

// console.log(x); // 10


// const person = {
//     name: 'Lee'
//   };
  
//   // 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
//   console.log(Object.getOwnPropertyDescriptor(person, 'name'));
//   // {value: "Lee", writable: true, enumerable: true, configurable: true}

// const person = {
//     name: 'Lee'
//   };
  
//   // 프로퍼티 동적 생성
//   person.age = 20;
  
//   // 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.
//   console.log(Object.getOwnPropertyDescriptors(person));
//   /*
//   {
//     name: {value: "Lee", writable: true, enumerable: true, configurable: true},
//     age: {value: 20, writable: true, enumerable: true, configurable: true}
//   }
//   */

// const person = {
//     // 데이터 프로퍼티
//     firstName: 'Ungmo',
//     lastName: 'Lee',
  
//     // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
//     // getter 함수
//     get fullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//     // setter 함수
//     set fullName(name) {
//       // 배열 디스트럭처링 할당: "31.1 배열 디스트럭처링 할당" 참고
//       [this.firstName, this.lastName] = name.split(' ');
//     }
//   };
  
//   // 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
//   console.log(person.firstName + ' ' + person.lastName); // Ungmo Lee
  
//   // 접근자 프로퍼티를 통한 프로퍼티 값의 저장
//   // 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
//   person.fullName = 'Heegun Lee';
//   console.log(person); // {firstName: "Heegun", lastName: "Lee"}
  
//   // 접근자 프로퍼티를 통한 프로퍼티 값의 참조
//   // 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
//   console.log(person.fullName); // Heegun Lee
  
//   // firstName은 데이터 프로퍼티다.
//   // 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
//   let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
//   console.log(descriptor);
//   // {value: "Heegun", writable: true, enumerable: true, configurable: true}
  
//   // fullName은 접근자 프로퍼티다.
//   // 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
//   descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
//   console.log(descriptor);
//   // {get: ƒ, set: ƒ, enumerable: true, configurable: true}


// const person = {};

// // 데이터 프로퍼티 정의
// Object.defineProperty(person, 'firstName', {
//   value: 'Ungmo',
//   writable: true,
//   enumerable: true,
//   configurable: true
// });

// Object.defineProperty(person, 'lastName', {
//   value: 'Lee'
// });

// let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
// console.log('firstName', descriptor);
// // firstName {value: "Ungmo", writable: true, enumerable: true, configurable: true}

// // 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다.
// descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
// console.log('lastName', descriptor);
// // lastName {value: "Lee", writable: false, enumerable: false, configurable: false}

// // [[Enumerable]]의 값이 false인 경우
// // 해당 프로퍼티는 for...in 문이나 Object.keys 등으로 열거할 수 없다.
// // lastName 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않는다.
// console.log(Object.keys(person)); // ["firstName"]

// // [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없다.
// // lastName 프로퍼티는 [[Writable]]의 값이 false이므로 값을 변경할 수 없다.
// // 이때 값을 변경하면 에러는 발생하지 않고 무시된다.
// person.lastName = 'Kim';

// // [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없다.
// // lastName 프로퍼티는 [[Configurable]]의 값이 false이므로 삭제할 수 없다.
// // 이때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시된다.
// delete person.lastName;

// // [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 재정의할 수 없다.
// // Object.defineProperty(person, 'lastName', { enumerable: true });
// // Uncaught TypeError: Cannot redefine property: lastName

// descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
// console.log('lastName', descriptor);
// // lastName {value: "Lee", writable: false, enumerable: false, configurable: false}

// // 접근자 프로퍼티 정의
// Object.defineProperty(person, 'fullName', {
//   // getter 함수
//   get() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   // setter 함수
//   set(name) {
//     [this.firstName, this.lastName] = name.split(' ');
//   },
//   enumerable: true,
//   configurable: true
// });

// descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
// console.log('fullName', descriptor);
// // fullName {get: ƒ, set: ƒ, enumerable: true, configurable: true}

// person.fullName = 'Heegun Lee';
// console.log(person); // {firstName: "Heegun", lastName: "Lee"}

// // 빈 객체의 생성
// const person = new Object();

// // 프로퍼티 추가
// person.name = 'Lee';
// person.sayHello = function () {
//   console.log('Hi! My name is ' + this.name);
// };

// console.log(person); // {name: "Lee", sayHello: ƒ}
// person.sayHello(); // Hi! My name is Lee

// 함수는 객체다.
function foo() {}

// 함수는 객체이므로 프로퍼티를 소유할 수 있다.
foo.prop = 10;

// 함수는 객체이므로 메서드를 소유할 수 있다.
foo.method = function () {
  console.log(this.prop);
};

foo.method(); // 10

console.log(foo)

console.log(foo, foo.prop, foo.method)