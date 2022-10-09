/*
Write a JavaScript program to delete the rollno property from the following object. 
Also print the object before or after deleting the property.
*/

var student = {
    name : "Diego Murillo",
    sclass : "I",
    rollno : 18
};

console.log( student );
// In this case, the delete keyword allows us to erase
// the rollno property from the object easily
delete student.rollno;
console.log( student );