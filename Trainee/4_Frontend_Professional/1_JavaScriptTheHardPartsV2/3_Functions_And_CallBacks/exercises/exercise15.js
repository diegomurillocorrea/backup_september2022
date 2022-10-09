/*

Create a function groupBy that accepts an array and a callback, and returns an object. 
groupBy will iterate through the array and perform the callback on each element. 
Each return value from the callback will be saved as a key on the object. 
The value associated with each key will be an array consisting of all the elements that 
resulted in that return value when passed into the callback

*/

function groupBy ( arr, cb ) {
    var newObject = {};
    var cbArray = cb( arr )

    for ( let i = 0 ; i < arr.length ; i++ ) {
        if ( cbArray[ i ] == arr[ i ] ) {
            newObject[ cbArray[ i ] ] = [ arr[ i ] ];
        }
    }

    return newObject;
}

function callback ( arr ) {
    var newArray = [];
    for ( let i = 0 ; i < arr.length ; i++ ) {
        newArray.push( arr[ i ] );
    }

    return newArray;
}

var array = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 ];

console.log(
    groupBy( array, callback )
    //callback( array )
);