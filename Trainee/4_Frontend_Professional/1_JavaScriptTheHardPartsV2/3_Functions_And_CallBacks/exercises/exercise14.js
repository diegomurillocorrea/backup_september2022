/*

Create a function countBy that accepts an array and a callback, and returns an object. 
countBy will iterate through the array and perform the callback on each element. 
Each return value from the callback will be saved as a key on the object. 
The value associated with each key will be the number of times that particular return value was returned.

*/

function countBy ( arr, cb ) {
    var [ trueValues, falseValues ] = cb( arr );
    var newObject = {};

    for ( let i = 0 ; i < arr.length ; i++ ) {
        if ( arr[ i ] ) {
            newObject[ arr[ i ] ] = trueValues;
        } else {
            newObject[ arr[ i ] ] = falseValues;
        }
    }

    return newObject;
}

function callback ( arr ) {
    var trueCounter = 0;
    var falseCounter = 0;

    for ( let i = 0 ; i < arr.length ; i++ ) {
        if ( arr[ i ] ) {
            trueCounter++;
        } else {
            falseCounter++;
        }
    }

    return [ trueCounter, falseCounter ];
}

var array = [
            false,
            false, 
            false, 
            true, 
            false, 
            true, 
            false, 
            true, 
            false, 
            false, 
            false, 
            false, 
            true, 
            false, 
            true, 
            true, 
            true, 
            true, 
            true, 
            true, 
            true, 
        ];

console.log(
    countBy( array, callback )
);