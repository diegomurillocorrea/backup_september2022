/* Loop through the suspects array */

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

function foo () {
    for ( var i = 0 ; i < game.suspects.length ; i++ ) {
        console.log( game.suspects[ i ] );
    }
}

foo();

/*
for ( let key in obj ) {
    obj[ key ];
}
*/