/*
Loop through all the properties of the 
suspect objects in the suspects array,
marke them if you think they are guilty -> culpable
*/

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

/* 
function gameLoop () {
    for ( var i = 0 ; i < game.suspects.length ; i++ ) {
        console.log( game.suspects[ i ].personName );
        console.log( game.suspects[ i ].color );
    }
} 

foo();
*/

var gameLoop = function () {
    for ( var i = 0 ; i < game.suspects.length ; i++ ) {
        for ( var key in game.suspects[ i ] ) {
            if ( game.suspects[ i ][ key ] === "Rusty" ) {
                console.log( "Found -> ", game.suspects[ i ][ key ] );
            } else {
                console.log( "Next time! -> ", game.suspects[ i ][ key ] );
            }
        }
    }   
}

gameLoop();