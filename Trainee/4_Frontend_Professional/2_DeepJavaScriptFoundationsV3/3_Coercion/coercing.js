const addAStudent = numStudents => numStudents + 1;

console.log(
    // the "+" symbol, turns the string to a number
    addAStudent( +"16" )
);

console.log(
    // but we can be more specific and use the
    // fundamental Number function
    addAStudent( Number( "17" ) )
);

console.log(
    "diego".length
);

console.log( Number( true ) === 1 );
console.log( true < 3 );