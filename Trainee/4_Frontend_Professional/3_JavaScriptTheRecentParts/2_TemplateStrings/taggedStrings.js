var v = 42;
var o = { a: 1, b: [ 2,3,4 ] };

logger`This is my value: ${ v } and another: ${ o }`;

try {
    nothing();
} catch( err ) {
    logger`Caught: ${ err }`;
}