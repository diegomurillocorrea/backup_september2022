function repeater ( count ) {
    var str;
    return function allTheAs () {
        if ( str == undefined ) {
            str = "".padStart( count, "A" );
        }
        return str;
    };
}

var A = repeater( 10 );

console.log(
    A()
);

console.log(
    A()
);