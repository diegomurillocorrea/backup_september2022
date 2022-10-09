/*
Write a JavaScript program to list the properties of a JavaScript object.
*/

const person = {
    firstName: "Diego",
    secondName: "Enrique",
    lastName: "Murillo",
    veryLastName: "Correa",
    age: 18,
    height: 1.75,
    weight: 200,
    married: true,
    jobPosition: "Frontend Developer Trainee",
    student: true
};

// In this case, the for in loop, help me to get the object properties
for ( let props in person ) {
    console.log( props );
}