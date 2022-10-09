/*
Create a function goodKeys that accepts an object and a callback. 
The callback will return either true or false. goodKeys will iterate 
through the object and perform the callback on each value. 
goodKeys will then return an array consisting only the keys whose 
associated values yielded a true return value from the callback.
*/

const goodKeys = ( obj, cb ) => {
    return cb( obj );
}

const callback = obj => {
    var newArr = [];
    var keys = Object.keys( obj );
    var values = Object.values( obj );
    var length = keys.length && values.length;

    for ( let i = 0 ; i < length ; i++ ) {
        if ( keys[ i ] == values[ i ] ) {
            newArr[ keys[ i ] ] = values[ i ];
        }
    }

    if ( newArr.length == length ) {
        return true;
    } else {
        return false;
    }
}

var object1 = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9, 
}

var object2 = {
    "0": 9,
    "1": 8,
    "2": 7,
    "3": 6,
    "4": 5,
    "5": 4,
    "6": 3,
    "7": 2,
    "8": 1,
    "9": 0, 
}

var result1 = goodKeys( object1, callback );
var result2 = goodKeys( object2, callback );

// true
console.log( result1 );

// false
console.log( result2 );