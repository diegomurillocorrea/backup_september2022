/* FIBONACCI ITERATIVE */
/*
function fibonacci( num ) {

    let seq = [ 1,1 ]

    for ( let i = 2 ; i < num ; i++ ) { 

        // there is no [2] position in the seq array
        // that's why we will assign that value
        seq[ i ] = seq[ i - 1 ] + seq[ i - 2 ] // 2
    }

    return seq[ num - 1 ] // numero ya no será 10, cambia a 9

}

console.log( fibonacci( 10 ) )
*/


/* FIBONACCI RECURSIVE */
/*
// Way 1
const fibonacci = ( num ) => num <= 1 ? 1 : fibonacci( num - 1 ) + fibonacci( num - 2 )

function solutionFibonacci ( numero ) {
    if ( numero <= 1 ) {
        return 1
    } else {
        return solutionFibonacci( numero - 1 ) + solutionFibonacci( numero - 2 )
    }
}

// Way 2
console.log( "RECURSIVE FIBONACCI", solutionFibonacci( 6 ) )
*/



/* MEMOIZATION FIBONACCI */

const cache = {}

function fibonacci( num ) { // num -> 6

    // false
    if ( num < 1 ) return 0

    // false
    if ( num < 2 ) return 1

    // false
    if ( num in cache ) return cache[ num ]

    // 13
    const value = fibonacci( num - 1 ) + fibonacci( num - 2 )

    // 13 is assigned to cache array
    cache[ num ] = value

    // returned 13
    return value 

}

console.log( "~~~~~ FIBONACCI ~~~~~" )
console.log( fibonacci( 8 ) )