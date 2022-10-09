// Function 1
// array -> [ "s" , "cr" , "t cod" , " :) :)" ]
// joinString -> "e"
function joinElements( array,joinString ) {
    let resultSoFar = ""
    
    //array.length -> 4 ( 4 - 1 -> 3 )
    for ( let i = 0 ; i < array.length - 1 ; i++ ) {
        // resultSoFar = array[ i -> 0 -> "s"] + joinString -> "e"
        resultSoFar += array[i] + joinString
    }

    // resultSoFar -> "se" + array[ array.length - 1 -> 3 ]
    return resultSoFar + array[array.length - 1]
}

console.log( joinElements( [ "s" , "cr" , "t cod" , " :) :)" ], "e" ) )