var teacher = "Diego";

function otherClass () {
    var teacher = "Enrique";

    function ask ( question ) {
        console.log( teacher, question );
    }

    ask( "Why?" );
}

otherClass();

ask("????");