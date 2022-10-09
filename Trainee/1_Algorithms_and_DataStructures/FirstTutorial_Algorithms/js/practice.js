function recursion( numero ) {
    console.log( numero );
    if ( numero >= 10 ) {
        return "~~~ ENDED RECURSION ~~~"
    }
    return recursion( numero + 1 ) 
}

/*
console.log( "~~~ RECURSION ~~~" )
console.log( recursion( 1 ) );
*/

/* * * * * * * * * * * * * * * * * * * * * * * * * */

function joinElements( array,joinString ) {
    function recurse( index,resultSoFar ) {
        resultSoFar += array[ index ]
        if ( index === array.length - 1 ) {
            return resultSoFar
        } else {
            return recurse( index + 1, resultSoFar + joinString )
        }
    }
    return recurse( 0, '' )
}

/*
console.log( joinElements( [ "B" , "b"," :)" ], "e" ) )
*/

/*
const Factorial = ( n ) => {
    console.log( `Factorial since ${n}` );
    if ( n < 1 ) {
        return "~~~ RECURSIION HAS ENDED ~~~"
    }
    return ( n * Factorial(n - 1) )
}

console.log( "~~~~~ THIS IS THE FACTORIAL WITH RECURSION ~~~~~ " )
console.log( Factorial(5) )
*/