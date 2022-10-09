function goVote () {
    console.log( "You can vote" );
}

function notVote () {
    console.log( "You cannot vote" );
}

let age = 18;

if ( age >= 18 ) {
    goVote();
} else {
    notVote();
}