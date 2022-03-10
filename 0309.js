// var x = 1;

// function foo() {
//   var x = 10;
//   bar();
// }

// function bar() {
//   console.log(x);
// }

// console.log('실행')
// foo(); // ?
// bar(); // ?


// 전역 함수
function foo() {
  console.log('global function foo');
}

function bar() {
  // 중첩 함수
  function foo() {
    console.log('local function foo');
  }

  foo(); // ①
}

bar();