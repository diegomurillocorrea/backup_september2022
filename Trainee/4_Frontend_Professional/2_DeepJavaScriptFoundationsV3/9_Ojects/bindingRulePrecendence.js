var workshop = {
    teacher: "Diego",
    ask: function ask ( question ) {
        console.log( this.teacher, question );
    }
};

new ( workshop.ask.bind( workshop ) ) ( "what's up buddy?" );