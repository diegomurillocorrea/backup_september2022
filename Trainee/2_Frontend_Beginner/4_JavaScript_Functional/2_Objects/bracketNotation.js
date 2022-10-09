var person = [];
var plea = "wouldShe";

person.name = "Mrs. White"; // this is a valid variable name

var who = person.name;

// In the person array, the zero position will be the string
person[ 0 ] = "I was not in the Billiards room";

// person.1 = "Hello"; This does not work because one is not a string and we have to use the brackets

person[ "plea" ] = "I would never!"; // to make the plea variable a string

console.log( person );

person.plea;

person[ plea ] = "I would never!";

console.log( person );