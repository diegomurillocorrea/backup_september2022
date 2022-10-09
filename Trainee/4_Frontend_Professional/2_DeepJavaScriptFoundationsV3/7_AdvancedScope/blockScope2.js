( function diff ( x, y ) {
    if ( x > y ) {
        let tmp = x;
        x = y;
        y = tmp;
    }

    console.log( y - x );
} ) ( 10, 5 );