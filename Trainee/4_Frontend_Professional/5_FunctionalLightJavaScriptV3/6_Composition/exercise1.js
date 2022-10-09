function minus2 ( x ) { return x - 2; };
function triple ( x ) { return x * 3; };
function increment ( x ) { return x + 1; };

// add shipping rate
/* var tmp = increment( 4 );
tmp = triple( tpm );
var baseprice = 0;
var totalCost = baseprice + minus2( tmp ); */

var totalCost;
var baseprice = 0;

console.log(
    totalCost = baseprice + ( minus2( triple( increment( 4 ) ) ) )
);