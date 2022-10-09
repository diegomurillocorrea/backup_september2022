var teacher = "Diego";

// This works well
function ask ( question ) {
    console.log( teacher, question );
}

// This does not work well
function ask ( question ) {
    console.log( teacher, question );
}

/* function askAgain ( question ) {
    "use strict";
    console.log( this.teacher, question );
} */

ask("What's up buddy?");
//askAgain("What's up buddy?");