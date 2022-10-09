const createTuple = function ( a, b, c, ...d ) {
    console.log( arguments );
    return [ [ a, c ], [ b, d ] ];
}

// Arguments Keyword -> References all the arguments as a pseudo array
createTuple(
    "It",
    "be",
    "could",
    "anyone",
    "no one"
)