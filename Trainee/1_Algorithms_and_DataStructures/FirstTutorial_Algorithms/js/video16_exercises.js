// Task 1
// A function that takes an argument and multiples n times 10

const times10 = ( n ) => ( n * 10 )

/*console.log( "----- TASK 1 -----" )
console.log( "times10 returns: ", times10( 9 ) )*/

// Task 2
// Use an object to cache the results of your times10 function

let cache = {}

const memoTimes10 = ( n ) => {
    if ( n in cache ) {
        console.log( "Fetching from cache: ", n )
        return cache[ n ]
    } else {
        console.log( "Calculating result" )
        let result = times10( n )
        cache[ n ] = result
        return result
    }
}

/*console.log( "----- TASK 2 -----" )
console.log( "Task 2 calculated value: ", memoTimes10( 9 ) )
console.log( "Task 2 cache value: ", memoTimes10( 9 ) )*/

// Task 3
// Clean up your global scope by moving your cache inside your function

const memoizedClosure = ( cb ) => {
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

const memoizedClosureTimes10 = memoizedClosure()
/*console.log ( "----- TASK 4 -----" )

try {
    console.log ( "Task 4 calculated value: ", memoizedClosureTimes10( 9 ) )
    console.log ( "Task 4 cached value: ", memoizedClosureTimes10( 9 ) )
} catch {
    console.error ( "Task 4: ", e )
}*/

// Task 4
/*
Make your memo function generic and accept the
timmes 10 function as a callback rather than defining
the n * 10 logic inside the if/else or pulling it in from
the global scope.
*/

const memoize = ( cb ) => {
    let cache = {}
    return ( ...args ) => {
        if ( n in cache ) {
            console.log( "Fetching from cache: ", n )
            return cache[ n ]
        } else {
            console.log( "Calculating result" )
            let result = cb( ...args )
            cache[ n ] = result
            return result
        }
    }
}

// This is a reference for cb parameter in the function memoize
const memoizedTimes10 = memoize(times10)
console.log( "----- TASK 4 -----" )
console.log( "Task 4 calculated value: ", memoizedTimes10(9) )
console.log( "Task 4 cache value: ", memoizedTimes10(9) )