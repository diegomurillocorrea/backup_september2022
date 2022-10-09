const constructArr = function ( /* The key arguments will take all */ ) {
    // We use the Array keyword to make an object to an array
    // We use prototype to be refered to an object
    // We use the slice function to get a copy of the prototype we are getting
    // We use the call function to go for an object out of the constructArr function
    const arr = Array.prototype.slice.call( arguments );
    // We'll push this value to the end of the arr array
    arr.push( "The billiards room?" );
    // We use the join function to give the array a space between every element
    return arr.join( " " );
};

console.log( constructArr( "was", "it", "in" ) );
// was it in The billiards room?