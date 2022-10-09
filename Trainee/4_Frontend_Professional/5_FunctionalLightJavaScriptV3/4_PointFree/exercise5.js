var mod2 = mod( 2 );
var eq1 = eq( 1 );

function isOdd ( x ) {
    return eq1( mod2( x ) );
}

function compose ( fn2, fn1 ) {
    return function composed ( v ) {
        return fn2( fn1( v ) );
    };
}

var isOdd = compose( eq1, mod2 );