function ask ( question ) {
    console.log( this.teacher, question );
}

var workshop1 = {
    teacher: "Diego",
    ask: ask
};

var workshop2 = {
    teacher: "Mabelinne",
    ask: ask
};

workshop1.ask( "how do I share a method?" );
workshop2.ask( "how do I share a method?" );