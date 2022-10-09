var nestedValues = [ 1, [ 2, 3 ], [ [] ], [ 4, [ 5 ] ], 6 ];

console.log(
    nestedValues.flat( 0 )
);

// Here we are deleting one nested level
console.log(
    nestedValues.flat( /* default: 1 */ )
);

// Here we are deleting two nested level
// Will look like a normal array
console.log(
    nestedValues.flat( 2 )
);

// Even though if we want to flat the array out of the allowed level
// This will always return the last level allowed of the nested array
console.log(
    nestedValues.flat( 3 )
);