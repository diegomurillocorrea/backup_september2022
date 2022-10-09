class Workshop {
    constructor ( teacher ) {
        this.teacher = teacher;
    }

    ask ( question ) {
        console.log( this.teacher, question );
    }
}

class AnotherWorkshop extends Workshop {
    speakUp ( msg ) {
        this.ask( msg() );
    }
}

/* class AnotherWorkshop extends Workshop {
    speakUp ( msg ) {
        Relative Polymorphism
        super.ask( msg.toUpperCase() );
    }
} */

var JSRecentParts = new AnotherWorkshop( "Mabelinne" );

JSRecentParts.speakUp( "Are classes getting better?" );