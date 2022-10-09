/*
Scope / Closures

- Nested Scope
- Closure

Scope: Where to look for things
*/

let x = 18;
//console.log( y ); // undefined

let teacher = "Diego";

function otherClass () {
    teacher = "Enrique";
    topic = "React";
    console.log( `Welcome to our ${ topic } Teacher, ${ teacher }!` );
}

otherClass();