function CreateSuspectObjects ( name ) {
    return {
        name: name,
        color: name.split( ' ' )[ 1 ],
        speak() { log( `My name is ${ name }` ); }
    };
};

var suspects = [ "Miss Scarlet", "Colonel Mustard", "Mr. White" ];

var suspectsList = [];

//           Callback or Iterator function -> Things that can be looped through
// _.each( list, callbackFunction )

_.each( suspects, function ( name ) {
    suspectsList.push( CreateSuspectObjects( name ) );
} ) ;