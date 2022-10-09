function CreateSuspectObjects ( name ) {
    return {
        name: name,
        color: name.split( ' ' )[ 1 ],
        speak () {
            log( `my name is ${ this.name }` );
        }
    };
};

var _ = {};

var suspects = [ "Miss Scarlet", "Colonel Mustard", "Mr. White" ];

var suspectsList = _.map(
    suspects,
    function ( name ) {
        return CreateSuspectObjects( name );
    }
);

/* _.each(
    suspectsList,
    function ( suspect ) {
        suspect.speak();
    }
); */

console.log( suspectsList );