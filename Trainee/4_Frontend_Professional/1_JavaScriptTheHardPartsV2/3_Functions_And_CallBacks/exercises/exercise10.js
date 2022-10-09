/*
Construct a function multiMap that will accept two arrays: 
- an array of values and
- an array of callbacks.

MultiMap will return an object whose keys match the elements in the array of values. -> { "0" === [ 0 ] }
The corresponding values that are assigned to the keys will be arrays -> { "0": [ ~ ] }
consisting of outputs from the array of callbacks, where the input to each callback is the key.
*/

const multiMap = ( arrayValues, arrayCBs ) => {
    let newObject = {};
    for ( let i = 0 ; i < ( arrayValues.length && arrayCBs.length ) ; i++ ) {
        if ( arrayValues.indexOf[ i ] == arrayCBs.indexOf[ i ] ) {
            newObject[ arrayValues[ i ] ] = arrayCBs[ i ];
        } else {
            console.log( "Both arrays were not equal!" );
        }
    }
    return newObject;
}

const CB0 = num => { return num * 0 };
const CB1 = num => { return num * 1 };
const CB2 = num => { return num * 2 };
const CB3 = num => { return num * 3 };
const CB4 = num => { return num * 4 };
const CB5 = num => { return num * 5 };

var arrayOfCBs = [ CB0, CB1, CB2, CB3, CB4, CB5 ];
var arrayOfValues = [ 0,1,2,3,4,5 ];

console.log(
    multiMap( arrayOfValues, arrayOfCBs )
);