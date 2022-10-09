function shippingRate ( size, weight, speed ) {
    return ( ( size + 1 ) * weight ) + speed;
}

console.log(
    shippingRate( 5, 10, 6 )
);