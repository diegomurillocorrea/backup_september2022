const array1 = [5, 12, 8, 130, 44];

/* const found = array1.find(
    function ( element ) {
        return element == 8 ;
    }
); */

const found = array1.find(element => element == 5);

console.log(found);
// expected output: 12