// function Circle(radius) {
//   // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.

//   // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
//   this.radius = radius;
//   this.getDiameter = function () {
//     return 2 * this.radius;
//   };

//   // 3. 암묵적으로 this를 반환한다.
//   // 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
//   return 100;
// }

// // 인스턴스 생성. Circle 생성자 함수는 명시적으로 반환한 객체를 반환한다.
// const circle = new Circle(1);
// console.log(circle); // Circle {radius: 1, getDiameter: ƒ}


// // 함수는 객체다.
// function foo() {}

// // 함수는 객체이므로 프로퍼티를 소유할 수 있다.
// foo.prop = 10;
// foo.test = 'test';

// // 함수는 객체이므로 메서드를 소유할 수 있다.
// foo.method = function () {
//   console.log(this.prop);
//   console.log(this.test);
// };

// foo.method(); // 10


// function foo() {}

// // 일반적인 함수로서 호출: [[Call]]이 호출된다.
// console.log(foo());

// // 생성자 함수로서 호출: [[Construct]]가 호출된다.
// console.log(new foo());

// // 함수 선언문으로 일반 함수 정의
// function foo() {}
// // 함수 표현식으로 일반 함수 정의
// const bar = function () {};
// // 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정하지 않는다.
// const baz = {
//   x: function () {}
// };

// // 일반 함수로 정의된 함수만이 constructor이다.
// new foo();   // -> foo {}
// new bar();   // -> bar {}
// new baz.x(); // -> x {}

// // 화살표 함수 정의
// const arrow = () => {};

// new arrow(); // TypeError: arrow is not a constructor

// // 메서드 정의: ES6의 메서드 축약 표현만을 메서드로 인정한다.
// const obj = {
//   x() {}
// };

// new obj.x(); // TypeError: obj.x is not a constructor

// // 생성자 함수로서 정의하지 않은 일반 함수
// function add(x, y) {
//   const test = x+y;
//   const d = 'ee'
//   return {test, d};
// }

// // 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
// let inst = new add(2, 3);
// // 함수가 객체를 반환하지 않았으므로 반환문이 무시된다. 따라서 빈 객체가 생성되어 반환된다.
// console.log(inst); // {}

// // 객체를 반환하는 일반 함수
// function createUser(name, role) {
//   return { name, role };
// }

// // 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
// inst = new createUser('Lee', 'admin');
// // 함수가 생성한 객체를 반환한다.
// console.log(inst); // {name: "Lee", role: "admin"}

// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  // return radius;
}

// new 연산자 없이 생성자 함수 호출하면 일반 함수로서 호출된다.
const circle = Circle(5);
console.log(circle); // undefined

// 일반 함수 내부의 this는 전역 객체 window를 가리킨다.
console.log(radius); // 5
console.log(getDiameter()); // 10

// circle.getDiameter();
// // TypeError: Cannot read property 'getDiameter' of undefined