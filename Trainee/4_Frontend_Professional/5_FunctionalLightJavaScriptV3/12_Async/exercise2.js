var a = [];

var b = mapLazy(
    function double ( v ) {
        return v * 2;
    },
    a
);

a.push( 1 );

a[ 0 ]; // 1
b[ 0 ]; // 2

a.push( 2 );

a[ 1 ]; // 2
a[ 1 ]; // 4