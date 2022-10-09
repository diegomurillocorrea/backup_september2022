/*
Closure: Is when a function "remembers" the
        variables outsite of it, even if you
        pass that function elsewhere.
*/

function ask ( question ) {
    /*
    A closure allows us to go for an inside function, calling the outsite function
    */
    setTimeout(function waitASec() {
        console.log( question );
    }, 1000);
}

ask( "What is a closure 1?" );

function ask2 ( question2 ) {
    return function holdYourQuestion () {
        console.log( question2 );
    }
}

var myQuestion = ask2( "What is a closure 2?" );

myQuestion();