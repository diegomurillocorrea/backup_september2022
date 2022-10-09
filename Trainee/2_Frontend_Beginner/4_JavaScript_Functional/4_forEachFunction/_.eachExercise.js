/*

each takes 2 arguments -> list | callback
_.each works with arrays and objects

*/

const _ = {};

/* THIS .each function is natively created */
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

_.each( [ "sally", "georgie", "porgie" ], function ( name, i, list ) {
    if ( list[ i + 1 ] ) {
        console.log( name, "is younger than", list[ i + 1 ] );
    } else {
        console.log( name, "is the oldest" );
    }
} );