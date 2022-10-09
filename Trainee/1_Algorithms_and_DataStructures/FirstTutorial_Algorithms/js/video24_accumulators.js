/*ACCUMULATOR*/

// this function has 2 parameters
// array = [ "s" , "cr" , "t cod" , " :)"]
// joinString = "e"
function joinElements( array,joinString ) {

    function recurse( index,resultSoFar ) { // here we have another function
        // so now we sttar with the recurse function
        // resultSoFar = '', array [ index ] -> "s"
        resultSoFar += array[ index ]//s

        // array.length - 1 ---> at the end of the array
        if ( index === array.length - 1 ) {//0 === (4-1 = 3) -> false
            return resultSoFar 
        } else {
            // 0+1 -> 1, s + e
            return recurse( index + 1, resultSoFar + joinString )
        }

    }

    // the function recurse has two parameters -> index and resultSoFar
    // is being called, right now
    // index -> 0, resultSoFar -> '' empty string 
    return recurse( 0, '' )
}

console.log( joinElements( [ "s" , "cr" , "t cod" , " :) :)" ], "e" ) )