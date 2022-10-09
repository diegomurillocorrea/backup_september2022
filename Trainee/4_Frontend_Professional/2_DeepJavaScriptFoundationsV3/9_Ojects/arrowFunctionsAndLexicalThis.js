var workshop = {
    teacher: "Diego",
    ask ( question ) {
        setTimeout(
            () => {
                console.log( this.teacher, question );
            },
            100
        );
    }
};

workshop.ask( "what's up buddy?" );