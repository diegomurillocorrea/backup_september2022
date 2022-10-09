/*

Create a function prioritize that accepts an array and a callback. 
The callback will return either true or false. 
Prioritize will iterate through the array and perform the callback 
on each element, and return a new array, where all the elements that 
yielded a return value of true come first in the array, and the rest 
of the elements come second.

*/

function prioritize ( arr, cb ) {
    return cb( arr );
}

function callback ( arr ) {
    var newArray = [];

    for ( let i = 0 ; i < arr.length ; i++ ) {
        if ( arr[ i ] ) {
            newArray.unshift( arr[ i ] );
        } else {
            newArray.push( arr[ i ] );
        }
    }

    return newArray;
}

var array = [ false, false, true, false, true, false, true, false, false, false, false, true, false, ];

console.log(
    prioritize( array, callback )
);