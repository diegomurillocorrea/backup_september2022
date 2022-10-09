var someObj = { something: { else: { entirely: 42 } } };

function Nothing () {
    return { map: Nothing, chain: Nothing, ap: Nothing };
}

function fromNullable ( val ) {
    if ( val == null ) return Maybe.Nothing();
    else return Maybe.of( val );
}

var prop = curry(
    2,
    function prop ( prop, obj ) {
        return fromNullable( obj[ prop ] );
    }
);

Maybe.of( someObj )
.chain( prop( "something" ) )
.chain( prop( "else" ) )
.chain( prop( "entirely" ) )

// debug inspection
.chain( identity );