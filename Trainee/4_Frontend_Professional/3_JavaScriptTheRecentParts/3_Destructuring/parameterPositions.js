// Without destructuring

function data ( tmp = [] ) {
    var [
        first = 10,
        second = 20,
        third = 30
    ] = tmp;
}

// With destructuring

function data2 ([
    first = 10,
    second = 20,
    third = 30
] = [] ) {
    // ...
}