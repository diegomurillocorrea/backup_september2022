function sum ( x, y ) { return x + y; };
function triple ( x ) { return x * 3; };
function divBy ( y, x ) { return x / y; };

console.log(
    divBy( 2, triple( sum( 3, 5 ) ) )
);

/*
Curry makes a binary function to a unary function

sum = curry( 2, sum );
divBy = curry( 2, divBy );

composeThree(
    divBy( 2 ),
    triple,
    sum( 3 )
)( 5 );
*/