function add ( x, y ) {
    return x + y;
}

[ 0,2,4,6,8 ].map( function addOne ( v ) {
        return add( 1, v );
    }
);

// [ 1,2,4,6,8 ]

add = curry( add );

[ 0,2,4,6,8 ].map( add( 1 ) )

// [ 1,2,4,6,8 ]