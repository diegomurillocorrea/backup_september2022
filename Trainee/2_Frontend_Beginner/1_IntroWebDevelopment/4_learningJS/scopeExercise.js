const A = "A";
let F;

function doStuff ( B ) {
    console.log( B ); // B
    const C = "C";// OK
    let H = "H"; // OK

    if ( 1 + 1 === 2 ) { // TRUE
        const D = "D";//IS
        H = "Something else"//IS
    }

    console.log( D );// DW
    console.log( H );// H

    F = "F";//f
}

let E = 0;
while ( E < 3 ) {
    E++;
    console.log( A );//AAA
    const G = "G";
}

console.log( E );// 3
console.log( G );//ERROR

doStuff( "B" ); // B, ERROR, H
console.log( B ); // ERROR
console.log( C ); // ERROR
console.log( F ); // undefined