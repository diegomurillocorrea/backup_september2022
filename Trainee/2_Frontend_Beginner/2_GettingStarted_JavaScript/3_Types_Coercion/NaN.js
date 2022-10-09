let greeting = "Hello Class!";

let something = greeting / 2;

console.log( something ); // NaN

console.log( Number.isNaN( something ) ); // true because thats not a number

console.log( Number.isNaN( greeting ) ); // false because thats a number