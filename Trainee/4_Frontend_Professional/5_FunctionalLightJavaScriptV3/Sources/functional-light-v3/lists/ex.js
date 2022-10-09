"use strict";

//function five () { return 5; }

//function nine () { return 9; }

function add ( x, y ) { return x + y; }

function add2 ( fn1, fn2 ) { return add( fn1, fn2 ); }

function constant ( v ) {
    return function f () {
        return v;
    }
}

var five = constant( 5 );
var nine = constant( 9 );

/* function addn ( ...fns ) {
    while ( fns.length > 2 ) {
        let [ fn0, fn1, ...rest ] = fns;
        fns = [
            function f () {
                return add2( fn0, fn1 );
            },
            ...rest
        ];
    }
    return add2( fns[ 0 ], fns[ 1 ] );
} */

console.log(
    addn( constant( 3 ), constant( 7 ), five, nine, constant( 11 ) )
);