function sum ( fn ) {
    return function two ( arg1, arg2 ) {
        return fn( arg1 + arg2 );
    };
}

function f ( ...args ) {
    return args;
}

var g = sum( f );

console.log(
    Number( g( 5, 5 ) )
);