function display ( data ) { console.log( data ); }
function printHello () { console.log( "Hello" ); }
function blackFor300ms () {} // Block JS thread for 300ms

setTimeout( printHello, 0 );

const futureData = fetch( "https://twitter.com/will/tweets/1" );
futureData.then( display )

blackFor300ms();
console.log( "Me first!" );