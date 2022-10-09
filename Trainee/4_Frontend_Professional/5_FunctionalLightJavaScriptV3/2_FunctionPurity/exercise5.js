/* THIS IS SIDE EFFECTS */

function shippingRate () {
    rate = ( ( size + 1 ) * weight ) + speed;
}

var rate;
var size = 12;
var weight = 4;
var speed = 5;

shippingRate();

console.log(
    rate
);

size = 8;
speed = 6;

shippingRate();

console.log(
    rate
);