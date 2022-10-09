// Composition

function composeThree ( fn3, fn2, fn1 ) {
    return function composed ( v ) {
        return fn3( fn2( fn1( v ) ) );
    }
}

function minus2 ( x ) { return x - 2; };

function triple ( x ) { return x * 3; };

function increment ( x ) { return x + 1; };

var f = composeThree( minus2, triple, increment );
var p = composeThree( increment, triple, minus2 );

console.log(
    f( 4 )
);

console.log(
    p( 4 )
);