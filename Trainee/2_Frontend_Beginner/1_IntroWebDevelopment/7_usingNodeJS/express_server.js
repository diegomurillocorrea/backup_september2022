const express = require( "express" );

const app = express();

app.get( "/", function ( req, res ) {
        res.end( "Welcome to my website" );
    }
);

app.get( "/complement", function ( req, res ) {
    res.end( "You look nice today" );
    }
);

app.listen( 3000 );
console.log( "Listening on http://localhost:3000" );