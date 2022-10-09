function Just ( val ) {
    return { map, chain, ap };

    // ******************************

    function map ( fn ) {
        return Just( fn( val ) );
    }

    // aka: bind, flatMap
    function chain ( fn ) {
        return fn( val );
    }

    function ap ( anotherMonad ) {
        return anotherMonad.map( val );
    }
}

var fortyOne = Just( 41 );
var fortyTwo = fortyOne.map(
    function inc ( v ) {
        return v + 1;
    }  
);