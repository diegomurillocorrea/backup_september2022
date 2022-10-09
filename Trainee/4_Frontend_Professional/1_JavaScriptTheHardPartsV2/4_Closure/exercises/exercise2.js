/*
Create a function createFunctionPrinter that accepts one input and 
returns a function. When that created function is called, it should 
print out the input that was used when the function was created.
*/

function createFunctionPrinterNormal ( input ) {
    return function () {
        console.log( input );
    }
}

const createFunctionPrinterES6 = input => () => console.log( input );

let printNormal = createFunctionPrinterNormal( "elaniin" );
let printES6 = createFunctionPrinterES6( "BitLab" );

printNormal();
printES6();