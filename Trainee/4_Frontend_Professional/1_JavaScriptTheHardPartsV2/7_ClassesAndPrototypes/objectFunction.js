const userCreator = ( name, score ) => {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = () => {
        newUser.score++;
    }
    return newUser;
};

const user1 = userCreator( "Diego", 3 );
const user2 = userCreator( "Enrique", 5 );

user1.increment();

console.log( user1 );
console.log( user2 );