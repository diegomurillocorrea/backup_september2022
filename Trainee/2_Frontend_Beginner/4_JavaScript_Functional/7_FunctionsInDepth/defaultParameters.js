const add = function ( a, b = 2 ) {
    console.log( arguments ); // [ 3 ] this is the number you passed in the add function
    return a + b;
};

add( 5 );
// 5