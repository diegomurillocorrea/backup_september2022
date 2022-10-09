// Everything that uses a dot in js is an object
// This is an object literal notation
var person = {
    name : "Mrs. White"
}

var person = {};

person.name = "Mrs. White";

// This is called: "Storing a value by reference"
var who = person.name;

console.log( who );

person.name = "Mrs. White";

console.log( who );

console.log( who.story ); // undefined

// A primitive value get pass by value
// A non-primitive value get pass by reference