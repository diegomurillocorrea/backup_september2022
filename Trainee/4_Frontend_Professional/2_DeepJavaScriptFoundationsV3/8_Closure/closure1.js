function ask ( question ) {
    setTimeout(
        function waitASec () {
            console.log( question );
        },
        100
    );
}

ask( "What is closure?" );

function ask2 ( question ) {
    return function holdYourQuestion () {
        console.log( question );
    };
}

var myQuestion = ask2( "What is a closure X2?" );

myQuestion();