/*
Create a function limitedRepeat that console logs hi for now every second, 
but only for 5 seconds. Research how to use clearInterval if you are not 
sure how to do this.
*/

const limitedRepeat = () => {
    console.log( "Hi" );
    setTimeout( limitedRepeat, 1000 );
}

clearInterval( limitedRepeat === 5000 );

limitedRepeat();