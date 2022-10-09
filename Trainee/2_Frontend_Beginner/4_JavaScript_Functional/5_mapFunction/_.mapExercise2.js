const _ = {};

/* _.map = function ( list, callback ) {
    // create an empty array
    var storage = [];
    // looping
    for ( var i = 0 ; i < list.length ; i++ ) {
        // callback( element )
        storage.push( callback( list[ i ], i, list ) );
        // push it to our array
    }

    // return the array
    return storage;
} */

_.map = function ( list, callback ) {
    var storage = [];

    _.each(
        list,
        function ( v, i, list ) {
            storage.push( callback( v, i, list ) );
        }
    )

    // return the array
    return storage;
}

_.each = function ( list, callback ) {
    if ( Array.isArray( list ) ) { // array
        // loop through array
        // call the callback with a list item
        for ( var i = 0 ; i < list.length ; i++ ) {
            // call the callback with a list item
            // value - index - entire list
            callback( list[ i ], i, list );
        }
    } else { // object
        // loop through object
        // call the callback with a list item
        for ( var key in list ) {
            callback( list[ key ], key, list )
        }
    }
        // celebrate
}




console.log( 
    _.map(
        [ 17, 16, 54 ],
        function ( val ) {
            return val;        
        }
    )
 );