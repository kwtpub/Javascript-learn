'use strict';

// Number.MAX_SAFE_INTEGER
// new Number();
//
// Array.from([0,1,2,3])
// new Array();
class Test {
  static a = 1;
  static hello() {
    console.log('Hello');
  }
  static {
    let b = 5;
    this.a = 5;
  }
}
Test.hello();

const Test2 = function() {

}
console.log(Test)

// Test2.hello = function() {
//   console.log('Hello')
// }
// Test2.hello()

// const test = new Test()
// test.hello()
