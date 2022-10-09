/*
Destructure this nested data structure into 
variables with the strings "red" and "orange".
*/

var suspects = [
    {
        personName: "Rusty",
        color: "orange"
    },
    {
        personName: "Miss Scarlet",
        color: "red"
    }
];

/* var { personName, color } = [
    {
        personName: "Rusty",
        color: "orange"
    },
    {
        personName: "Miss Scarlet",
        color: "red"
    }
]; */

var [ color1, color2 ] = [ suspects[ 0 ].color, suspects[ 1 ].color ];
console.log( color1 );
console.log( color2 );

var [ { color: firstColor }, { color: secondColor } ] = suspects;
console.log( firstColor );
console.log( secondColor );

var [ firstObj, secondObj ] = suspects;
console.log( firstObj );
console.log( secondObj );