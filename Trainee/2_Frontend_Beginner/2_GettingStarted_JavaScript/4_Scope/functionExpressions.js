/*
Function -> First Class Value
*/

// First way
let clickHandler = function () {
    // This is an anonymus function expression
}

// Second way
let keyHandler = function keyHandler () {
    // This is a named function expression
}

// This is a arrow function
let ids = people.map( person => person.id );

let ids = people.map( function getId( person ) {
            return person.id;
        }
    );

// Promise Chains
getPerson()
    .then( person => getData( person.id ) )
    .then( renderData );

getPerson()
    .then( function getDataFrom( person ) {
            return getData( person.id );
        }
    )
    .then( renderData );

/* Arrow functions -> Anonymus function expressions */