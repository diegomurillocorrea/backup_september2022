const pi = 3.1416; // global scope
let length = "It is short";

function areaDeUnCirculo( longitud ) {
    length = "It is long";
    let title = "+ - - - AREA DE UN CIRCULO - - - - +"; // inside scope
    console.log( title );
    return longitud * pi;
}
console.log( length ); // this will show the global scope result -> It is short
//console.log( title ); outsite scope, does not work
console.log( areaDeUnCirculo( 5 ) );
console.log( length ); // this will show the inside scope result -> It is long