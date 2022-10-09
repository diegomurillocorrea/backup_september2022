let students = [
    "Diego",
    "Mabelinne",
    "Carlos",
    "Francisco",
    "Oscar"
];

function greeStudents ( array ) {
    console.log( `Hi ${array}!` );
}

for ( let i = 0 ; i < students.length ; i++ ) {
    greeStudents( students[ i ] );
}

for ( let student of students ) {
    greeStudents( student );
}

while ( students.length > 0 ) {
    let student = students.shift();
    greeStudents( student );
}