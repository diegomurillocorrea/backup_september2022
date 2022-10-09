/*
Falsy values:
• 0
• -0
• null
• NaN
• false
• undefined

Truthy values:
- "Foo"
- 23
- { a:1 }
[ 1,3 ]
- true
- function () {}
*/ 

let studentsInputElement = { value:"1" };
let newStudents = [ 1,2,3,4,5 ];

function enrollStudent ( value ) {
    console.log( value );
}

if ( !!studentsInputElement.value ) { // !! -> This means the capital B boolean function
    numStudents =
        console.log( Number( studentsInputElement.value ) );
}

console.log( "\n" );

while ( newStudents.length > 0 ) {
    enrollStudent( newStudents.pop() );
}


let workShopEnrollment1 = 18;
let workShop2Element = { value: "19" };
let workShopEnrollment2 = workShop2Element.value;


// Coercion: Implicit can be good sometimes
if ( Number( workShopEnrollment1 ) < Number( workShopEnrollment2 ) ) {
    // 18 < 19
    // This will return true, because even the workShopEnrollment2 is a string, your are converting it to a number
}

if ( workShopEnrollment1 < workShopEnrollment2 ) {
    // 18 < "19"
    // This will return true, because even you have a number or a string, that string is being taken as a number
}

console.log( workShopEnrollment1 < workShopEnrollment2 );
console.log( Number( workShopEnrollment1 ) < Number( workShopEnrollment2 ) );