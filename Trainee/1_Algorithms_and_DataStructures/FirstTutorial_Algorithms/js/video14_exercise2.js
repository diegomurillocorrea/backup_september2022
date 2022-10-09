/*
TASK 3:

Clean up your global scope by moving your cache inside your function.

protip: Use a closure to return a function that you can call later.
*/

// MEMOIZEDCLOSURETIMES10 FUNCTION
const memoizedClosureTimes10 = ( n ) => {
    let cache = {} // cache [ n ] = result -> NO ASIGNA, GUARDA UN VALOR
    return ( n ) => {
        if ( n in cache ) {
            console.log( "Fetching from cache: ", n )
            return cache[ n ]
        } else {
            console.log( "Calculating result" )
            let result = n * 10 // the variable result is equal to -> (introduced value * 10)
            cache[ n ] = result // the result of the result variable keeps its value in the cache [ n ]
            return result // returns the result of n * 10
        }
    }
}

const memoClosureTimes10 = memoizedClosureTimes10()
console.log( "---------- TASK 3 ----------" )

try {
    console.log ( "Task 3 calculated value: ", memoClosureTimes10( 7 ) )
    console.log ( "Task 3 cached value: ", memoClosureTimes10( 7 ) )
} catch (e) {
    console.error( "Task 3: ", e )
}