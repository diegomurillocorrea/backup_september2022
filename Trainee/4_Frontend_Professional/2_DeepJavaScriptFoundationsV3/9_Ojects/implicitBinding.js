var workshop = {
    teacher: "Kyle",
    ask ( question ) {
        console.log( this.teacher, question );
    }
};

workshop.ask( "what is implicit binding?" );