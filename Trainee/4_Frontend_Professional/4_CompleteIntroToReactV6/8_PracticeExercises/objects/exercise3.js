/*
Write a JavaScript program to get the length of a JavaScript object
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

var objectLenght = Object.keys( person );

console.log(
    objectLenght.length
);