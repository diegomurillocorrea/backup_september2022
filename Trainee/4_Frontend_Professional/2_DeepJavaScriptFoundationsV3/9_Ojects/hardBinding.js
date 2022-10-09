var workshop = {
    teacher: "Kyle",
    ask ( question ) {
        console.log( this.teacher, question );
    }
};

setTimeout(
    workshop.ask,
    10,
    "Lost this?"
);

setTimeout(
    workshop.ask.bind( workshop ),
    10,
    "Hard bound this?"
);