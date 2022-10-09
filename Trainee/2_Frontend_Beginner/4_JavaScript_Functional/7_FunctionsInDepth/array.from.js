const constructArr = function () {
    // Instead of using -> const arr = Array.prototype.slice.call( arguments );
    // We'll use -> const arr = Array.from( arguments );
    const arr = Array.from( arguments );
    arr.push( "The billiards room?" );
    return arr.join( " " );
};

console.log( constructArr( "was", "it", "in" ) );