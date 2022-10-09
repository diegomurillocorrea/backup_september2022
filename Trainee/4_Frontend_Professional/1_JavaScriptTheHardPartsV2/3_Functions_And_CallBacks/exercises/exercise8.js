/*

Construct a function union that compares input arrays and returns 
a new array that contains all elements. If there are duplicate elements, 
only add it once to the new array. Preserve the order of the elements 
starting from the first element of the first input array. 

*/

const union = ( array, deleatingRepeatedValues, sorting ) => {
    return deleatingRepeatedValues(
        sorting( array( array1, array2 ) )
    );
}

const newArray = ( array1, array2 ) => {
    const newArray = [];
    for ( let i = 0 ; i < ( array1.length && array2.length ) ; i++ ) {
        newArray.push( array1[ i ], array2[ i ] );
    }

    return newArray;
}

const deleteRepeatedValues = ( array ) => {
    return array.filter(
        ( value, index ) => array.indexOf( value ) === index
    );
}

const sort = ( array ) => {
    return array.sort(
        ( a, b ) => a - b
    );
}

let array1 = [ 55,3,2,100,1,90,10 ]
let array2 = [ 90,10,4,7,8,55,3 ]

console.log(
    union( newArray, deleteRepeatedValues, sort )
);