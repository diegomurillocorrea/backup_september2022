// Associativity

function minus2 ( x ) { return x - 2; };

function triple ( x ) { return x * 3; };

function increment ( x ) { return x + 1; };

function composeTwo ( fn2, fn1 ) {
    return function composed ( v ) {
        return fn2( fn1( v ) );
    }
}

var f = composeTwo(
    composeTwo( minus2, triple ),
    increment
);

var p = composeTwo(
    minus2,
    composeTwo( triple, increment )
);

console.log(
    f( 4 )
);

console.log(
    p( 4 )
);