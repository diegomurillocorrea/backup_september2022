function userCreator ( name, score ) {
    const newUser = Object.create( userFunctionStore );
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunctionStore = {
    increment: function () { this.score++ },
    login: function () { console.log( "Logged In" ); }
};

const user1 = userCreator( "Diego", 3 );
const user2 = userCreator( "Enrique", 5 );
user1.hasOwnProperty( "score" );

console.log( 
    user1
 );

console.log( 
    user2
);