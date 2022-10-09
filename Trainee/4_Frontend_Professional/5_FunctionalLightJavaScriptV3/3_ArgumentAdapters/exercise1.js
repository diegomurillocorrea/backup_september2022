// Unary
function increment ( x ) {
    return sum( x, 1 );
}

// Binary
function sum ( x, y ) {
    return x + y;
}

console.log(
    increment( 20 )
);