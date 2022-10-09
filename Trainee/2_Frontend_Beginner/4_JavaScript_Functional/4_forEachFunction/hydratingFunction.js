/* PART 1
function CreateSuspectObjects ( name ) {
    return {
        name: name,
        color: name.split( ' ' )[ 2 ],
        speak: function () {
            console.log( "My name is ", name );
        }
    };
};


var suspects = [ "Miss Scarlet", "Colonel Mustard", "Mr. White" ]; */


/* PART 2 
function CreateSuspectObjects ( name ) {
    return {
        name: name,
        color: name.split( ' ' )[ 2 ],
        // This is a method on the object
        // This is a ES6 feature, where we can add methods like this
        speak() {
            console.log( "My name is ", name );
        }
    };
};

var suspects = [ "Miss Scarlet", "Colonel Mustard", "Mr. White" ]; */

/* PART 3

Hydrating an object is taking a piece of data
we are turning in it into some data structure
This is going to have a view model

This example is going to be like a javascript class
Except this case we wont use the keyword this 

function CreateSuspectObjects ( name ) {
    return {
        name: name,
        color: name.split( ' ' )[ 2 ],
        speak() {
            console.log( "My name is ", name );
        }
    };
};

var suspects = [ "Miss Scarlet", "Colonel Mustard", "Mr. White" ];

var suspectsList = []; */

/* PART 4

function CreateSuspectObjects ( name ) {
    return {
        name: name,
        color: name.split( ' ' )[ 2 ],
        speak() {
            console.log( "My name is ", name );
        }
    };
};

var suspects = [ "Miss Scarlet", "Colonel Mustard", "Mr. White" ];

var suspectsList = [];

for ( var i = 0 ; i < suspects.length ; i++ ) {
    let suspect = CreateSuspectObjects( suspects[ i ] );
    suspectsList.push( suspect );
} */

/* PART 5 */

function CreateSuspectObjects ( name ) {
    return {
        name: name,
        color: name.split( ' ' )[ 2 ],
        speak() {
            console.log( "My name is ", name );
        }
    };
};

var suspects = [ "Miss Scarlet", "Colonel Mustard", "Mr. White" ];

var suspectsList = [];

for ( var i = 0 ; i < suspects.length ; i++ ) {
    suspectsList.push( CreateSuspectObjects( suspects[ i ] ) );
}