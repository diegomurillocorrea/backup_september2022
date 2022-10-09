// This is called COMPOSITION

function mod ( y ) {
    return function forX ( x ) {
        return x % y;
    };
}

function eq ( y ) {
    return function forX ( x ) {
        return x === y;
    };
}

var mod2 = mod( 2 );
var eq1 = eq( 1 );

function isOdd ( x ) {
    return eq1( mod2( x ) );
}