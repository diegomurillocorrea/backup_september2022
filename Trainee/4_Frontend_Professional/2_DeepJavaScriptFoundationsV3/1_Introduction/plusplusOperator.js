function plusPlus ( origin_x ) {
    var origin_x_coerced = Number( origin_x );
    x = origin_x_coerced + 1
    return origin_x_coerced;
}

var x = "5";

console.log( 
    plusPlus( x ) // 5
);

console.log( x ); // 6