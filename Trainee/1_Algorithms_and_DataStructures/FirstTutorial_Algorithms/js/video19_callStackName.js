/*
CALL STACK GAME

1. Push called Fn on stack
2. Execute Fn body
until...
... another fn is called:
    Pause the current execution and start at
    step1
... a return is hit:
    Pop the current Fn of the stack
    Resume executing the previous Fn
*/

// we initialize the variable tracker because this is going to 
// be the counter of our recursion function
var tracker = 0
// we make de callMe function with the arg parameter
// because that would be the message we can to show at the end of the recursion
var callMe = function(arg) {
    tracker++ // tracker increments once per function called
    if ( tracker === 3 ) { // now we evaluate if tracker applies the 3 counter
        // if condition applies, the tracker variable will set its value to 0
        tracker = 0
        return `loops! ${arg}` // and it will return a msj with the arg passed at the end of the return function
    }// if condition does not aplly, the arg parameter will get the value of "anytime" and the counter will increase

    // the "anytime" value will be shown in line 21, because that would be the parameter
    // passed in the callMe function
    return callMe(`anytime ${tracker}`)
}

// if we enter a value in the callMe function, that will not ,match because
// the line 26, will give the value we need to exit from the recursion callMe function
console.log(callMe()); // loops!