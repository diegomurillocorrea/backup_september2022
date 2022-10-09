var teacher = "Diego";

function ask ( question ) {
    console.log( teacher, question );
}

function otherClass () {
    var teacher = "Enrique";

    ask( "Why?" );
}

otherClass();