var workshop = {
    teacher: "Diego",
    ask ( question ) {
        console.log( this.teacher, question );
    }
};

workshop.ask( "is this a module?" )