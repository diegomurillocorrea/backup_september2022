var box = {};

box[ "material" ] = "cardboard";
box[ 0 ] = "meow";
box[ "^&*" ] = "testing 123"; // this is not a good naming

var test = box[ "^&*" ];

console.log( box );