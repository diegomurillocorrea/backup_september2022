const reduce = function ( list, cb, initial ) {
    // loop through list
    // list -> [ 1,2,3 ]
    // cb -> sum
    let memo = initial; // 1 --- 6
    for ( var i = 0 ; i < list.length ; i++ ) {
        // list[ i ] -> 1, memo -> 0 --- 3 + 3
        if ( i === 0 && memo === undefined ) {
            memo = list[ i ];
        } else {
            memo = cb( list[ i ], memo );
        }
    }

    return memo;
        // call the cb with arr[ i ], prev/initial
        // save the return value
    // return result
}

reduce( [ 1,2,3 ], ( v, sum ) => v + sum, 0 ) // 6