/*

Create a function majority that accepts an array and a callback. 
The callback will return either true or false. 
Majority will iterate through the array and perform the callback 
on each element until it can be determined if the majority of the 
return values from the callback are true. 
If the number of true returns is equal to the number of false returns, 
majority should return false.

*/

function majority ( arr, cb ) {
    const [ trueValues, falseValues ] = cb( arr );
    if ( trueValues > falseValues ) {
        return true;
    } else {
        return false;
    }
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

var array = [ true, true, true, true, false, false, false, false ];

console.log(
    majority( array, callback )
);