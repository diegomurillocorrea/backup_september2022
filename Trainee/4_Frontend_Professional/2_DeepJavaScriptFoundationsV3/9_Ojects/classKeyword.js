class Workshop {
    constructor ( teacher ) {
        this.teacher = teacher;
    }

    ask ( question ) {
        console.log( this.teacher, question );
    }
}

var deepJS = new Workshop( "Diego" );
var reactJS = new Workshop( "Enrique" );

deepJS.ask( "What's up buddy?" );
reactJS.ask( "What's up buddy?" );