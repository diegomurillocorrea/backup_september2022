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