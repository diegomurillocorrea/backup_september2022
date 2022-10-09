var name = "Diego";
var lastName = "Murillo";
var age = 18;

// With template strings, if we break the line
// In the console.log will do the same
console.log(
    `Hello, my name is ${ name } ${ lastName },
    and I am ${ age } years old.`
);

// With double quotes there is something called
// string continuation and with this, even if we
// break the line, it still continue in the same one
console.log(
    "Hello my name is " + name + " " + lastName + 
    ", and I am " + age + " years old"
);