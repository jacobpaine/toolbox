// UNFINISHED

// The word 'this' is incredibly important in Javascript and comes up a lot in interviews for a variety of reasons. Here is my understanding of what the MDN docs are saying.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

// 'this' changes depending on the context.

// Global context
// As you likely know, everything in JS is an Object. Although that's not entirely true. Everything in JS looks like it behaves like an Object. Needless to say, interacting with object is important. In a web browser, the Window is the global object. 'this' refers to the window.

console.log(window === this); // true

// In web development, window is the global object.

// Function context
// The functional context changes if you are in strict mode or not.
function someFunction() {
  return this;
}
someFunction() === window; // true

//   In strict mode, this is false.
function someOtherFunction() {
  "use strict";
  return this;
}
someOtherFunction() === window; // false

//   Ideally you should be working in ES2015 and using arrow functions. So I'm going to skip over bind() and apply(). If you have some restrictions where you MUST use ES5 or before, talk to your Senior Dev and read the MDN docs thoroughly.

// Arrow Functions
// 'this' keeps the value of the most recent context's this. In a function, it is the function's 'this'. In global, 'this' is the global object (or window in web development);
// Per MDN
var globalObject = this;
var foo = () => this;
console.log(foo() === globalObject); // true
console.log(foo() === window); // true
