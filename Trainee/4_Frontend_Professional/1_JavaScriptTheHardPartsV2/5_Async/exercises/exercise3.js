/*
Create a function helloGoodbye that console logs 
hello right away, and good bye after 2 seconds.
*/

const goodBye = () => {
    console.log( "Good bye" );
}

const helloGoodbye = () => {
    setTimeout( goodBye, 2000 )
    console.log( "Hello" );
}

helloGoodbye();

