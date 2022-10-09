function add1 ( v ) { return v + 1; }
function mul2 ( v ) { return v * 2; }
function div3 ( v ) { return v / 3; }

function compose ( fn3, fn2, fn1 ) {
    return fn3( fn2( fn1( v ) ) );
}

var list = [ 2,5,8,11,14,17,20 ];

console.log(
    list
    .map(
        compose( div3, mul2, add1 )
    )
);