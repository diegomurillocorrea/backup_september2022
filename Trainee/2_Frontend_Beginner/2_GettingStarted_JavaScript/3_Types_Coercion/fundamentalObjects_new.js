/*
Type Conversion

Use New:
- Object()
- Array()
- Function()
- Date()
- RegExp()
- Error()

Don't use new:
- String()
- Number()
- Boolean()
*/

let yesterday = new Date( "April 3, 2021" );
yesterday.toUTCString();

console.log( yesterday );

let myGPA = String( transcript.gpa );

console.log( myGPA );