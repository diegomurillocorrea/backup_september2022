function userCreator ( name, score ) {
    // We use the Object.create() to make a reference
    // With the userFunctionStore object that have
    // 2 functions on it
    const newUser = Object.create( userFunctionStore );
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

// This is a __proto__ link
// Prototype feature
const userFunctionStore = {
    // The "this" keyword is being refered to the object
    // That is going to be linked with
    increment: function () { this.score++ },
    login: function () { console.log( "Logged In" ); }
};

const user1 = userCreator( "Diego", 3 );
const user2 = userCreator( "Enrique", 5 );

user1.increment();
user2.increment();

console.log( 
    user1
 );

console.log( 
    user2
);