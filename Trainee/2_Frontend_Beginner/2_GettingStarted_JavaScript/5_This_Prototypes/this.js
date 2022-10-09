/*
this / Prototypes

- this -> dynamic context

A function's this references the execution
context for that call, determined entirely by
how the function was called

A this-aware function can thus have a
different context each time it's called, which
makes it more flexible & reusable

- Prototypes
- class {}
*/

// this-aware function
// This is an implicit binding

/* var workShop = {
    teacher: "Diego",
    ask ( question ) {
        console.log( `${this.teacher} ${question}` ); // way 1
        console.log( this.teacher, question ); // way 2
    }
};

workShop.ask( "what is implicit binding?" ); */


// This is an explicit binding
function ask ( question ) {
    console.log( this.teacher, question );
}

// The call() method calls a function with a this value and with individual previuous arugments 

function otherClass () {
    var myContext = {
        teacher: "Diego"
    };

    ask.call( myContext, "Why?" );
}

otherClass();