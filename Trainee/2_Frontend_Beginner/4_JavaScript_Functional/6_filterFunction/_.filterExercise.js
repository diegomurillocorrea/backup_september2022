const _ = {};

/* _.filter() = function ( arr, cb ) {
    // create a new array
    // is declared with const because array is a non-primitive value
    const storage = [];
    // loop through arr
    for ( let i = 0 ; i < arr.length ; i++ ) {
        // check if cb returns true
        if ( cb( arr[ i ], i, arr ) === true ) {
            // if returns true, push into array
            storage.push( arr[ i ] );
        }
    }
    // return arr
    return storage;
} */

_.filter() = function ( arr, cb ) {
    const storage = [];

    _.each (
        arr,
        function ( item, i, list ) {
            if ( cb( item, i, list ) ) storage.push( item );
        }
    );
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