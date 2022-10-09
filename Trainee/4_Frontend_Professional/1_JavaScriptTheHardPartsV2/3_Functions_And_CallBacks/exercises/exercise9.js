/*

Construct a function objOfMatches that accepts two arrays and a callback. 
objOfMatches will build an object and return it. 
To build the object, objOfMatches will test each element of the first array 
using the callback to see if the output matches the corresponding element 
(by index) of the second array. If there is a match, the element from the 
first array becomes a key in an object, and the element from the second array 
becomes the corresponding value.

*/

const objOfMatches = ( array_1, array_2, callback ) => {
    let newObject = {};
    for ( let i = 0 ; i < ( array_1.length && array_2.length ) ; i++ ) {
        if ( array_1[ i ] == array_2[ i ] ) {
            newObject = callback( array_1, array_2 );
        } else {
            console.log( "Both arrays were not equal!" );
        }
    }

    return newObject;
}

const makingKeys = ( arr1, arr2 ) => {
    const keyArray = {};
    for ( let i = 0 ; i < ( arr1.length && arr2.length ) ; i++ ) {
        keyArray[ arr1[ i ] ] = arr2[ i ];
    }
    return keyArray;
}

let array1 = [ 0,1,2,3,4,5 ];
let array2 = [ 0,1,2,3,4,5 ];

console.log( objOfMatches( array1, array2, makingKeys ) );