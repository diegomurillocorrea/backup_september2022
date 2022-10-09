/*
Create a function createFunction that creates and returns a function. 
When that created function is called, it should print "hello". 
*/

function createFunctionNormal () {
    return function () {
        console.log( "Hello Normal" );
    }
}

const createFunctionES6 = () => () => console.log( "Hello ES6" );

let helloNormal = createFunctionNormal();
let helloES6 = createFunctionES6();

helloNormal();
helloES6();