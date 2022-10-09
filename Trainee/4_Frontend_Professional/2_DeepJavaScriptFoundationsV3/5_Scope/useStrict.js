"use strict";

var teacher = "Diego";

function otherClass () {
    teacher = "Enrique";
    topic = "React";
    console.log( "Welcome!" );
}

// this would be Diego
console.log( teacher );
// console.log( topic ); this would be undefined

otherClass();

// Because we are using use strict, teacher would have the global scope variable Diego
console.log( topic );
// Because we are using use strict console.log( topic ); would be undefined