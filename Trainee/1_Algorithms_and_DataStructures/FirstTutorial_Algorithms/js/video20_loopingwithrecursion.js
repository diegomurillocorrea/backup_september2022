/*
RECURSION IN 4 STEPS

1. Identify base case(s) -> The condition when we want the loopt to stop
2. Identify recursive case(s) -> adding numbers, each time we call our recursion with our base case
3. Return where appropriate -> you could lose your data if not
4. Write procedures for each
case that bring you closer to
the base cases(s)
*/

/*var callMyself = function(){

    if(){
        // base case
    }else{
        // recursive case
        callMyself()
    }

}*/
/*
const descendingRecursion = ( n ) => {
    
    console.log( "n ===", n );

    if ( n <= 1 ) {
        return "complete"
    }

    return descendingRecursion( n-1 )
}

console.log( descendingRecursion(3) );*/



const ascendingRecursion = ( n ) => {
    
    console.log( "n ===", n );

    if ( n >= 5 ) {
        return "complete"
    }

    return ascendingRecursion( n+1 )
}

console.log( ascendingRecursion(1) );