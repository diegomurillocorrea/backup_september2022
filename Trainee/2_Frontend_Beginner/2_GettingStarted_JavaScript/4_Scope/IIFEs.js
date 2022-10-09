/*
I -> Immediately
I -> Invoked
F -> Function
E -> Expression
*/

let teacher = "Diego";
console.log( teacher );
(
    function anotherTeacher () {
        let teacher = "Enrique";
        console.log( teacher );
    }
)(); // With this, you have declared and invoked this function
