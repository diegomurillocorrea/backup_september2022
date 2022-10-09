// These two nested functions are pure

function addOne ( x ) {
    return function addTwo ( y ) {
        return function addtThree ( z ) {
            return x + y + z;
        }
    }
}

// We have to call the outest function
console.log(
    addOne( 1 )( 20 )( 21 )
);