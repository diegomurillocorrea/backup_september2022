/*
Converting Types

The way to convert from one type to another: coercion
*/

let msg1 = "There are ";
let numStudents = 16;
let msg2 = " students.";
console.log( msg1 + numStudents + msg2 ); // implicit string coercion

console.log( `There are ${ numStudents + "" } students.` ); // idiomatic string coercion

/*
Number + Number = Number
Number + String = String
String + Number = String
String + String = String
*/

function addAStudent ( numStudents ) {
    return numStudents + 1;
}

let studensInputElem = {
    value: "18"
}

console.log( addAStudent(
    Number( studensInputElem.value ) 
) );