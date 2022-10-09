/*
Prototype -> It is an object where any instances are going to be
            linked to or delegate to
*/

// The "this" word, is aware and all the function is going to work as a constructor
function WorkShop ( teacher ) {
    this.teacher = teacher;
}

WorkShop.prototype.ask = function ( question ) {
    console.log( this.teacher, question );
};

// Here the "new" keyword is going to invoke thw workshop function
var deepJS = new WorkShop( "Diego" );
var reactJS = new WorkShop( "Murillo" );

deepJS.ask( "Is 'prototype' a class?" );

reactJS.ask( "Isn't 'prototype' ugly?" );