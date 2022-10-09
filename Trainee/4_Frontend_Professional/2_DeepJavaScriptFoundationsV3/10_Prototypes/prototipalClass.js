function Workshop ( teacher ) {
    this.teacher = teacher;
}

Workshop.prototype.ask = function ( question ) {
    console.log( this.teacher, question );
};

var deepJS = new Workshop( "Diego" );
var reactJS = new Workshop( "Enrique" );

deepJS.ask( "What's up buddy?" );
reactJS.ask( "What's up buddy?" );