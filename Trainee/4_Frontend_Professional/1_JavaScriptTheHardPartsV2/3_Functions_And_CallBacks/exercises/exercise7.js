/*

Construct a function intersection that compares input arrays 
and returns a new array with elements found in all of the inputs. 
BONUS: Use reduce!

*/

const intersection = ( arr1, arr2, callback ) => {
    const newArray = [];
    let arrayCb1 = callback( arr1, add, 0 );
    let arrayCb2 = callback( arr2, add, 0 );
        if ( arrayCb1 == arrayCb2 ) {
            console.log( "\nBoth arrays are equal!" );
            newArray.push( arrayCb1 || arrayCb2 );
        } else {
            console.log( "\nThe arrays were not equal :(" );
        }
    return newArray;
}

const reduce = ( array, callback, initialValue ) => {
    var accumulator = 0;
    for ( let i = 0 ; i < array.length ; i++ ) {
        accumulator += callback( initialValue, array[ i ] );
    }
    return accumulator;
}

const add = ( a, b ) => a + b;

let array1 = [ 1,2,3,4,5 ]
let array2 = [ 5,4,3,2,1 ]

console.log(
    intersection( array1, array2, reduce )
);