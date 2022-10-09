/* ES6 Destructuring arrays */

// THIS IS THE TARGE     THIS IS THE SOURCE
const [ first, second ] = [ true, false ];
let [ first, second ] = [ true, false ];
var [ first, second ] = [ true, false ];

// Assignment
[ first, second ] = [ true, false ];

/* 
Destructuring is a simplified way of defining variables and
taking them outsite of an object or an array
*/

// undefined
[ a, b, c ] = [ 1, 2 ]
// c = ?

/*
When to you const?
Const is used when you do not want the variable name to be reassigned to something
You cannot change a const variable value, but what you can change is the const variable
properties

When to use let?
Let is used when you are working with scopes
You use it more when you are working with
blockscopes
And a block is just curly braces that is not an object
*/

/* ES6 Destructuring objects */

// THIS IS THE TARGE     THIS IS THE SOURCE
const { first, second } = { first: 0, second: 1 };
let { first, second } = { first: 0, second: 1 };
var { first, second } = { first: 0, second: 1 };

// Assignment
//{ first, second } = { first: 0, second: 1 };

/*
When using an order -> Arrays
When using references -> Objects
*/