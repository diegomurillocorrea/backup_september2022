/*

Create an object using bracket and dot notation that
represents the characters and related data you may find
in a game of Clue

*/

var game = {};

// an object, has a key and a value
game.murderer = "??";

game[ "weapons" ] = [ 
    { type: "lasers", location: "lab" }, 
    { type: "angry cats", location: "home" }, 
    { type: "dish soap", location: "kitchen" } 
];

game.name = [];

game.name[ 0 ] = "Miss Scarlet";

game.name.push( "Mr. Green" ); // push() -> puts an element at the back of the array

console.log( game.name );