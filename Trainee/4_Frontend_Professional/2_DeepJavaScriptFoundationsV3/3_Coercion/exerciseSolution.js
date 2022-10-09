/* THIS IS THE REAL SOLUTION */

// Exercise 1
function isValidName ( name ) {
    if ( 
        typeof name == "string" &&
        // trim() in this case is used to see how many whitespaces are
        name.trim().length >= 3
    ) {
        return true;
    }

    return false;
}

// Exercise 2
function hoursAttended ( attended, length ) {
    // Condition 1
    if ( 
        typeof attended == "string" &&
        attended.trim() != ""
    ) {
        // Here we are reassinging a variable to a Number type
        attended = Number( attended )
    }
    // Condition 2
    if ( 
        typeof length == "string" &&
        length.trim() != ""
    ) {
        // Here we are reassinging a variable to a Number type
        length = Number( length )
    }
    // Condition 3
    if (
        typeof attended == "number" &&
        typeof length == "number" &&
        attended >= 0 &&
        length >= 0 &&
        // To make sure, a number is a whole number we use Number.isInteger()
        Number.isInteger( attended ) &&
        Number.isInteger( length ) &&
        attended <= length
    ) {
        return true;
    }   
    return false;
}

/* ALL THE TESTS, HAVE TO TURN TRUE IF MY SOLUTION IS OK */

// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);

/* THIS SOLUTION IS SUPER GOOD */ 