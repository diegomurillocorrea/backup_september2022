function ask ( question ) {
    console.log( this.teacher, question );
}

function otherClass () {
    var myContext = {
        teacher: "Diego"
    };

    ask.call( myContext, "why?" );
}

otherClass();