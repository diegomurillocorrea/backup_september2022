const z = 1;

// Pure function

function addTwo ( x, y ) {
    return x + y;
}

// Impure function

function addAnother ( x, y ) {
    return addTwo( x, y ) + z;
}

console.log(
    addAnother( 20, 21 )
);