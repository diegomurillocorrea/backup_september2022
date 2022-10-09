// http -> the wiring
const http = require( "http" );

const server = http.createServer( 
    function( req, res ) {
        console.log( `User visited ${ req.url }` );
        res.end( "Hello!" );
    }
);

console.log( "Listening on http://localhost:3000" );
server.listen( 3000 ); // the localhost:3000 is your own server