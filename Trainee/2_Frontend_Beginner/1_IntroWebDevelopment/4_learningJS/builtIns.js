const sentence = "ThIs iS A WiRd SeNtEnCe";
console.log( sentence.toLowerCase() );
console.log( sentence.toUpperCase() );

// you will always have the same value even if the number has a float greater than 5
console.log( Math.floor( 5.9 ) ); // -> 5

// you will always have the next value if the number has a float 
console.log( Math.ceil( 5.1 ) ); // -> 6

// you will always have the next value if the number is more or equal than 5
console.log( Math.round( 5.4 ) ); // -> 5
console.log( Math.round( 5.5 ) ); // -> 6

const name = "Diego Murillo";
// first parameter -> where to start ( since index 0 ) 
// second parameter -> how many characters you want to save 
console.log( name.substr( 6, 7 ) ); 