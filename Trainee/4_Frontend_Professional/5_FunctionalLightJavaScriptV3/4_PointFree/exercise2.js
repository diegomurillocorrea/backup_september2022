function isOdd ( v ) {
    return v % 2 == 1;
}

function isEven ( v ) {
    return !isOdd( v );
}

console.log(
    isEven( 4 )
);