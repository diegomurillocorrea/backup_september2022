var arr = [ 10, 20, 30, 40, 50 ];

console.log(
    arr.includes( 20 ) // Returns true because that number is in the array
);

console.log(
arr.includes( 60 ) // Returns false because that number is not in the array
);

console.log(
// Returns false because is behaving as && operator
// Number 20 is in the array, but 3 is not
arr.includes( 20, 3 )
);

console.log(
// Returns false because is behaving as && operator
// Number 10 is in the array, but -2 is not
arr.includes( 10, -2 )
);

console.log(
// Returns true
// I have to investigate how includes() works
arr.includes( 40, -2  )
);

console.log(
// Returns true because that NaN value is in the array
arr.includes( NaN )
);