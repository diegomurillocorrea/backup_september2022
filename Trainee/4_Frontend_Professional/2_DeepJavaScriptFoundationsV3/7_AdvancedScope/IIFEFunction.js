var teacher = "Diego";

// This IIFE is anonymus

(
    function ( teacher ) {
        console.log( teacher );
    }
)( "Enrique" );

console.log( teacher );