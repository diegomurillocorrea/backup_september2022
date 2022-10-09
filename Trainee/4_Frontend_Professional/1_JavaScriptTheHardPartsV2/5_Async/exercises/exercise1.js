/*
Thinking point (no writing code necessary for this challenge): 
Inspect the code given to you in Challenge 1. 
In what order should the console logs come out? 
Howdy first or Partnah first?
*/

const sayHowdy = () => {
    console.log( 'Howdy' );
  };
  
  const testMe = () => {
    // Because we are using Web Browser Features, this is gonna be next
    // Even if the milliseconds are 0
    setTimeout( sayHowdy, 0 );
    // Because this is inside JavaScript world, this is gonna be first
    console.log( 'Partnah' ); 
  }
  // After thinking it through, uncomment the following line to check your guess!
  testMe(); // what order should these log out? Howdy or Partnah first?