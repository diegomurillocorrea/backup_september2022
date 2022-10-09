// FACOTORIAL WITH LOOP
/*
function computeFactorial( num ) { // we ask a number parameter
    var result = 1 // we declare the result variable with value of 1

    for ( var i = 2 ; i <= num ; i++ ) { // we start the loop in 2
        console.log( `result = ${ result } * ${i} ( ${ result * i } )` ) // here we do the calculation
        result *= i // -> result is 1, so 1 * 2 = 2, then 2 * 3 = 6, then 6 * 4 = 24 and then 24 * 5 = 120
    }

    return result // at the end we will output the last result we got
}

console.log( computeFactorial( 5 ) ) // we enter the 5 value
*/
/*
// FACTORIAL WITH RECURSION
function computeFactorial( num ) { // num parameter

    if ( num === 1 ) { // condition that will output false until num would be equal to 1
        console.log( "Hitting the base case" ) // this is going to be the last answer
        return 1; // it will show just the number 1
    } else {
        // this will show the number we entered multiplied by the number we entered minus 1
        console.log( `returning ${ num } * computeFactorial( ${ num - 1 } ) ` )
        // here it is going to be the calculation of the factorial process
        return num * computeFactorial( num - 1 )
    }

}

console.log( computeFactorial( 5 ) )
*/
/*
// Function 1
function logNumbers( start, end ) { // we got 2 parameters

    // we show a message with the start and end, that the loop will do
    console.log( `iterativily looping from ${ start } until ${ end } ` )

    // we do the for loop
    // i got the start value
    // if the start value is minor or equal to the end value, the variable i would increase
    for ( var i = start ; i <= end ; i++ ) {
        // and it will show the message and the increment
        console.log( "hitting index", i )
    }

}

console.log( "~~~ logNumbers ~~~" )
console.log( logNumbers( 1,10 ) )
*/

// Function 2
function logNumbersRecursively( start,end ) { // we have two parameters -> start and end

    // we show this message -> 
    console.log( `recursively loooping from ${ start } until ${ end }` )

    // inside logNumbersRecursively function, we have another function
    function recurse( i ) { // this one receives the i parameter
        // this one will show that message and the i value
        console.log( "hitting index", i )

        // here we evaluate if i value is minor that end
        if ( i < end ) { // if true, the recurse value will add 1 to the i value
            recurse( i + 1 )
        }

    }

    // the i value is going to be the start value we would enter in the logNumbersRecursively function
    // we have to put it out of the recurse function to get the start value at the top of the 
    // logNumbersRecursively function
    recurse( start )

}

console.log( "~~~ logNumbersRecursively ~~~" )
console.log( logNumbersRecursively( 1,5 ) )