/*
Checking Equality
== vs ===

This is not what it is
== checks value ( loose )

=== checks value and type ( strict )

This is what it is
== allows coercion ( types different )

=== disallows coercion ( types name )
*/

let studentName1 = "Diego";
let studentName2 = `${ studentName1 }`;

let workShopEnrollment1 = 16;
let workShopEnrollment2 = workShopEnrollment1 + 0;

console.log( studentName1 == studentName2 );
console.log( studentName1 === studentName2 );

console.log( workShopEnrollment1 == workShopEnrollment2 );
console.log( workShopEnrollment1 === workShopEnrollment2 );


let workShop1 = { topic: null };
let workShop2 = {};

// A way to make a comparison
console.log(
    ( workShop1.topic === null ) || ( workShop1.topic === undefined ) &&
    ( workShop2.topic === null ) || ( workShop2.topic === undefined )
);

// The best way to make a comparison
console.log(
    workShop1.topic == null && workShop2.topic == null
);