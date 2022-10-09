var teacher1 = "Diego";
console.log( teacher1 );

var teacher2 = { name: "Mabelinne" }
console.log( teacher2.name );

// tagging literals
var teacher3 = String`Enrique`;
console.log( teacher3 );

var teachers = Object`${ { name: String`Diego` } }`;

// Type signatures ( functions, objects, etc )

function getName ( studentRec = { name : String } ) {
    return studentRec.name;
}

var firstStudent = { name: String`Manuel` };

var firstStudentName = getName( firstStudent );

console.log( firstStudentName );