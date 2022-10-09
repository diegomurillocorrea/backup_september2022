/*
TASK 4:
Make your memo function generic and accept the times10 function as a
callback rather than defining the n * 10 logic inside the if/else or
pulling it in from the global scope.

protip: Take advantage of the fact that parameters are saved in the
closure as well, just like the cache from the previous example.
*/

const times10 = ( n ) => ( n * 10 )

const memoizedClosureTimesM = ( cb ) => {
    let cache = {}
    return ( n ) => {
        if ( n in cache ) {
            console.log( "Fetching from cache: ", n )
            return cache[ n ]
        } else {
            console.log( "Calculating result" )
            let result = times10(n)
            cache[ n ] = result
            return result
        }
    }
}

/* returned function from memoizedAdd */
const memoize = memoizedClosureTimesM( times10 )
console.log ( "----- TASK 4 -----" )

try {
    console.log ( "Task 4 calculated value: ", memoize(8) )
    console.log ( "Task 4 cached value: ", memoize(8) )
} catch {
    console.erro ( "Task 4: ", e )
}