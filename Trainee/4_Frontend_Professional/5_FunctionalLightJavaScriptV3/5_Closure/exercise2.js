function unary ( fn ) {
    return function one ( arg ) {
        return fn( arg );
    };
}

function addAnother ( z ) {
    return function addTwo ( x, y ) {
        return x + y + z;
    }
}