// const obj = {};
// const parent = { x: 1 };

// // getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
// obj.__proto__;
// // setter함수인 set __proto__가 호출되어 obj 객체의 프로토타입을 교체
// obj.__proto__ = parent;

// console.log(obj.x); // 1



// // obj 객체를 생성한 생성자 함수는 Object다.
// const obj = new Object();
// console.log(obj.constructor === Object); // true

// // add 함수 객체를 생성한 생성자 함수는 Function이다.
// const add = new Function('a', 'b', 'return a + b');
// console.log(add.constructor === Function); // true

// // 생성자 함수
// function Person(name) {
//   this.name = name;
// }

// // me 객체를 생성한 생성자 함수는 Person이다.
// const me = new Person('Lee');
// console.log(me.constructor === Person); // true


// // 객체 리터럴
// const obj = {};

// // 함수 리터럴
// const add = function (a, b) { return a + b; };

// // 배열 리터럴
// const arr = [1, 2, 3];

// // 정규표현식 리터럴
// const regexp = /is/ig;


