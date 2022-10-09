var arr = [ 10, 20, 30, 40, 50 ];

console.log(
    arr.indexOf( 30 ) != -1
);
// Turns true because, the 30 index does not exists

console.log(
    ~arr.indexOf( 20 )
);
// Gives us -2, because we are using the tilde operator
// An it is wrong

console.log(
    ~arr.indexOf( NaN )
);
// Gives us 0, because we are using the tilde operator
// An it is wrong