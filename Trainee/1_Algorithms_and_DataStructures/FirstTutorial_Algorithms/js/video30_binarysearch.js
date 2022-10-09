// Task: Implement binary search

function binarySearch( list, item ) {
    var min = 0 //1 -> 2
    var max = list.length - 1//4
    var guess

    while ( min <= max ) {
        guess = Math.floor( ( min + max ) / 2 )//2 -> Math.floor(5/2) -> 2 -> 3 

        if ( list[ guess ] === item ) {//list[2]->7 === 90 -> list[ guess (3)] -> 90 === 90
            return guess // 2
        } else {
            if ( list[ guess ] < item ) {//list[2]->7 < 90 -> true
                min = guess + 1 // min = 2+1 -> 3
            } else {
                max = guess - 1 // max = 2-1 -> 1
            }
        }
    }

    return -1 // 
}

console.log( binarySearch( [2,6,7,90,103], 90 ) )

// 3