// // // 생성자 함수
// // function Circle(radius) {
// //   this.radius = radius;
// //   this.getArea = function () {
// //     // Math.PI는 원주율을 나타내는 상수다.
// //     return Math.PI * this.radius ** 2;
// //   };
// // }

// // // 반지름이 1인 인스턴스 생성
// // const circle1 = new Circle(1);
// // // 반지름이 2인 인스턴스 생성
// // const circle2 = new Circle(2);

// // // Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
// // // getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
// // // getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.
// // console.log(circle1.getArea === circle2.getArea); // false

// // console.log(circle1.getArea()); // 3.141592653589793
// // console.log(circle2.getArea()); // 12.566370614359172


// // 생성자 함수
// function Circle(radius) {
//     this.radius = radius;
//   }
  
//   // Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
//   // 공유해서 사용할 수 있도록 프로토타입에 추가한다.
//   // 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
//   Circle.prototype.getArea = function () {
//     return Math.PI * this.radius ** 2;
//   };
  
//   // 인스턴스 생성
//   const circle1 = new Circle(1);
//   const circle2 = new Circle(2);
  
//   // Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
//   // 프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받는다.
//   // 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
//   console.log(circle1.getArea === circle2.getArea); // true
  
//   console.log(circle1.getArea()); // 3.141592653589793
//   console.log(circle2.getArea()); // 12.566370614359172


// const obj = {};
// const parent = { x: 1 };

// // // getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
// // obj.__proto__;
// // setter함수인 set __proto__가 호출되어 obj 객체의 프로토타입을 교체
// obj.__proto__ = parent;

// console.log(obj.x); // 1


const parent = {};
const child = {};

// child의 프로토타입을 parent로 설정
child.__proto__ = parent;
// parent의 프로토타입을 child로 설정
parent.__proto__ = child; // TypeError: Cyclic __proto__ value



