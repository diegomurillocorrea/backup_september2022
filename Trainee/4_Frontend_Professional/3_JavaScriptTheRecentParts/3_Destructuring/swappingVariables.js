// This is the normal swapping variables without destructuring

var x = 10;
var y = 20;

{
    let tmp = x; // tmp = 10
    x = y; // x = 20
    y = tmp; // y = 10

    console.log( x );
    console.log( y );
}

// This is the recent swapping variables with destructuring

var a = 10;
var b = 20;

[ b, a ] = [ a, b ];

console.log(
    `${ a } \n${ b }`
);