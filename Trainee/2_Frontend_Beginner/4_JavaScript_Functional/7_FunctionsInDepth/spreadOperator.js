/* const createTuple = ( a, b, c, d ) => {
    return [ [ a, c ], [ b, d ] ];
}

// Tuple -> An array that has a collection of arrays with two values each one

console.log(
    createTuple(
        "It",
        "be",
        "could",
        "anyone",
        "no one"
    )
); */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// Here we are using the spread operator
const createTuple = ( a, b, c, ...d ) => {
    return [ [ a, c ], [ b, d ] ];
}

// Tuple -> An array that has a collection of arrays with two values each one

console.log(
    createTuple(
        "It",
        "be",
        "could",
        "anyone",
        "no one"
    )
);