/* Part 4 */
const game = {
    "suspects": [
        {
            personName: "Rusty",
            color: "orange"
        },
        {
            personName: "Miss Scarlet",
            color: "red"
        }
    ]
};

console.log( game[ suspects ] ); // This will show error because is without quotes
console.log( game[ "suspects" ] ); // This is fine
console.log( game.suspects ); // This is fine too