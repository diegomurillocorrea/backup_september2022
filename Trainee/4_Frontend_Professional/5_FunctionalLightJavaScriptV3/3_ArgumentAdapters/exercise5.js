function reverseArgs ( fn ) {
    return function reverse ( ...args ) {
        return fn(...args.reverse() )
    };
}

function f ( ...args ) {
    return args;
}

var g = reverseArgs( f );

console.log(
    g( 1,2,3,4 )
);