function minus2 ( x ) { return x - 2; };
function triple ( x ) { return x * 3; };
function increment ( x ) { return x + 1; };

function shippingRate ( x ) {
    return minus2( triple( increment( x ) ) );
}

var totalCost;
var baseprice = 0;

console.log(
    totalCost = baseprice + shippingRate( 4 )
);