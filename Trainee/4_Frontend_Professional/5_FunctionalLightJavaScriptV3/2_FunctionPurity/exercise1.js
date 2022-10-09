/*THIS IS A PROCEDURE*/

function addNumbers (
    x = 0,
    y = 0,
    z = 0,
    w = 0
    ) {
    var total = x + y + z + w;
    console.log( total ); 
}

function extraNumbers ( x = 2, ...args ) {
    return addNumbers( x, 40, ...args )
}

extraNumbers();

extraNumbers( 3, 8, 11 );