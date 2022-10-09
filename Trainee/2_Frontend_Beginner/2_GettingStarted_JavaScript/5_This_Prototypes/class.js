/*
Class
*/

class Workshop {
    constructor ( teacher ) {
        this.teacher = teacher;
    }

    ask ( question ) {
        console.log( this.teacher, question );
    }
}

var deepJS = new WorkShop( "Diego" );
var reactJS = new WorkShop( "Murillo" );

deepJS.ask( "Is 'class' a class?" );

reactJS.ask( "Is this class OK?" );