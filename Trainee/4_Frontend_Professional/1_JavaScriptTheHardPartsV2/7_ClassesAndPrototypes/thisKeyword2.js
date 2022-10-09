function userCreator ( name, score ) {
    const newUser = Object.create( userFunctionStore );
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunctionStore = {
    increment: function () { 
        // In this case there is no problem to assign
        // The "this" keyword to the add1 function
        // Because the arrow function will realize
        // That the refence is not going to linked the 
        // global memory, instead, the userCreator function
        const add1 = () => { this.score++; }
        add1();
    }
};

const user1 = userCreator( "Diego", 3 );
const user2 = userCreator( "Enrique", 5 );

user1.increment();

console.log( 
    user1
 );

console.log( 
    user2
);