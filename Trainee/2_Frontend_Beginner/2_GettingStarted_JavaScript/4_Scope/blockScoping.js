/*
They let keyword will tell us to create a 
variable inside of a curly brace block
*/

var teacher = "Diego"; // we use var to specify the global scope

// Bloc Scoping: encapsulation
{
    let teacher = "Enrique" // we use let, to specify inside scope
    console.log( teacher );
}

console.log( teacher );


// Bloc Scoping: Let
function diff ( x, y ) {
    if ( x > y ) {
        let tmp = x;
        x = y;
        y = tmp;
    }

    return y - x
}

// Bloc Scoping: Let + var
/*
Using var to the function level -> Global scope
Using let to the scopes level -> Inside scope
*/
function repeat ( fn, n ) {
    var result;

    for ( let i = 0 ; i < n ; i++ ) {
        result = fn( result, i );
    }

    return result;
}

// Bloc Scoping: Explicit let block

function formatStr ( str ) {
    // Narrowly Scope
    {
        let prefix, rest;
            prefix = str.slice( 0, 3 );
            rest = str.slice( 3 );
            str = prefix.toUpperCase() + rest;
    }

    if ( /^FOO:/.test( str ) ) {
        return str;
    }

    return str.slice( 4 );
}