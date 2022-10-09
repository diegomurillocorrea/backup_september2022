var teacher = "Diego";

function otherClass () {
    teacher = "Enrique";
    topic = "React";
    console.log( "Welcome!" );
}

console.log( teacher );
//console.log( topic ); this would be undefined

otherClass();

// Because we called the otherClass function
// the teacher variable would get the otherClass value
console.log( teacher );
// And the topic will not be undefined, instead it would get the otherClass value
console.log( topic );