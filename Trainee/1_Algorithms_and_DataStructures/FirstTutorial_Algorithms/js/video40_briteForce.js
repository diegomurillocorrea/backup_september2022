/*
Write a function, makeChange, that returns an integer that represents the
least number of coins that add up to the amount, n.
*/

let recursionCounter = 0
const coins = [ 10, 6, 1 ]

const makeChange = ( value, i ) => { // value -> 12
    recursionCounter++
    console.log( `${ recursionCounter } : calling ${ value } at ${ i } `)
    if ( value === 0 ) return 0
    let minCoins // now this is 1   
    coins.forEach( ( coin, i ) => { // first coin -> 10 || so we go for 6 || the value turns 1
        // so 10 is not met in the condition || now 6 is not met in the condition || then we have 1
        if ( value - coin >= 0 ) { // so now 1 - 1 is 0 so the contidion is met
            let currMinCoins = makeChange( value - coin, i ) // now our value is 2
            if ( minCoins === undefined || currMinCoins < minCoins ) {
                minCoins = currMinCoins
            }
        }
    })
    return minCoins + 1 // finally we will have 1
}

console.log( makeChange( 12 ) )

// I just have to follow the tree we have about the recursion of brute Force
// This is an exponential time complexity