function ask ( question ) {
    console.log( this.teacher, question );
}

var workshop1 = {
    teacher: "Diego"
};

var workshop2 = {
    teacher: "Mabelinne"
};

ask.call( workshop1, "can I explicitly set context?" );
ask.call( workshop2, "can I explicitly set context?" );