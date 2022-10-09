var name = "Diego";
var it = name[ Symbol.iterator ]();

// Way 1
for ( let v of it ) {
    console.log( v );
}

console.log();

// Way 2
for ( let v of name ) {
    console.log( v );
}