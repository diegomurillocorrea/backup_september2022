/* Destructuring === Arrays */

var [ a, b ] = [ 1, 2 ];
console.log( a, b );
// => 1 2

/* Omit certain values */

var [ a, , b ] = [ 1, 2, 3 ];
console.log( a, b );
// => 1 3

/* Combine with spread/rest operator ( accumulates the rest of the values ) */

// The spread operator will take the rest of the values of the array
var [ a, ...b ] = [ 1, 2, 3, 4, 5 ]
console.log( a, b );
// => 1 [ 2, 3, 4, 5 ]

/* Swap variables easily without temp */
var a = 1, b = 2;
[ b, a ] = [ a, b ]
console.log( a, b );
// => 2 1

/* Advance deep arrays */
var [ a, [ b, [ c, d ] ] ] = [ 1, [ 2, [ [ [ 3, 4 ], 5 ], 6 ] ] ];
console.log( "a:", a );
console.log( "b:", b );
console.log( "c:", c );
console.log( "d:", d );

/* === Objects */
var { user: x } = { user: 5 };
console.log( x );
// => 5

/* Fail-Safe */
var { user: x } = { user2: 5 };
console.log( x );
// undefined, because user2 value was not declared

/* More values */
var { prop: x, prop2: y } = { prop: 5, prop2: 10 };
console.log( x, y );
// => 5 10

/* Short-hand syntax */
var { prop, prop2 } = { prop: 5, prop2: 10 };
console.log( prop, prop2 );
// => 5 10

/* Equal to: */
var { prop: prop, prop2: prop2 } = { prop: 5, prop2: 10 };
console.log( prop, prop2 );
// => 5 10

/* === Potencial grammar hiccups */
/* Oops: This does not work */
var a, b;
//{ a, b } = { a: 1, b: 2 };