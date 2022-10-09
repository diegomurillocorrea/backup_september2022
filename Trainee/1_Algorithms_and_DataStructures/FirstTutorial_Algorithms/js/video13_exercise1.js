/*
TASK 2:
Use an object to cache the results of your times10 function

protip 1: Create a function that checks if the value for n has been calculated before.

protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object
*/

// TIMES10 FUNCTION
const times10 = ( n ) => ( n * 10 )

const cache = {} // This object is used to save data

const memoTimes10 = ( n ) => {
    if ( n in cache ) { // If not, this will do what's down here
        console.log( "Fetching from cache: ", n ); // Fetching -> Capturando, leyendo, trayendo
        return cache[ n ]; // // Here the object cache will save the n value in the cache object
    } else { // If the first condition does not apply, it will di what's down here
        console.log( "Calculating result" ); // It will calculate the n value we entered
        let result = times10( n ); // the variable result will allow the times10 function with the entered number
        // The introduced number, will be allowed with cache and this one, will go for the times10 function
        cache[ n ] = result; 
        return result; // at the end, this would show the times10 function result
    }
}

console.log( "----------- TASK 2 -----------" );
console.log( "Task 2 calculated value: ", memoTimes10( 2 ) ); // calculated
console.log( "Task 2 cached value: ", memoTimes10( 2 ) ); // cached
console.log( "Task 2 calculated value: ", memoTimes10( 1 ) ); // calculated
console.log( "Task 2 cached value: ", memoTimes10( 1 ) ); // cached
console.log( cache );