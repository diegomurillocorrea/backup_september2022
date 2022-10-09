function composeThree ( fn3, fn2, fn1 ) {
    return function composed ( v ) {
        return fn3( fn2( fn1( v ) ) );
    }
}

function minus2 ( x ) { return x - 2; };

function triple ( x ) { return x * 3; };

function increment ( x ) { return x + 1; };

var shippingRate = composeThree( minus2, triple, increment )

var totalCost;
var baseprice = 0;

console.log(
    totalCost = baseprice + shippingRate( 4 )
);