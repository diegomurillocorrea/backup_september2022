// var hoisting?
// usually bad

teacher = "Diego";
var teacher;

console.log( teacher );

// functions hoisting
// IMO actually pretty useful
getTeacher(); // 

function getTeacher () {
    return teacher;
}

console.log( getTeacher() );