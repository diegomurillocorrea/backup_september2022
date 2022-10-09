/*
COMMON PATTERNS FOR RECURSION
- Wrapper functions
- Accumulators
*/

/*
function wrapperFnLoop( start,end ) {
    function recurse( i ) {

        console.log( `looping from ${ start } until ${ end }` )

        if ( i < end ) {
            recurse( i + 1 )
        }
    }

    recurse( start )
}

console.log( "~~~ wrapperFnLoop ~~~" )
console.log( wrapperFnLoop( 1,5 ) )
*/

function MemoFnLoop( i,end ) { // we have a function with 2 parameters
    // we show this message
    console.log( `looping from ${ i } until ${ end }` )
    // we evaluate the conditional
    // i = 1, end = 5
    if ( i < end ) { // if the conditional is true
        // the function calls itself
        // i + 1 -> 1 + 1 and end -> 5
        MemoFnLoop( i + 1, end ) // this would get the loop again until 5
    }
}

console.log( "~~~ MemoFnLoop ~~~" )
console.log( MemoFnLoop( 1,5 ) )