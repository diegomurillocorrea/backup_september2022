function userCreator ( name, score ) {
    const newUser = Object.create( userFunctionStore );
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunctionStore = {
    increment: function () { 
        // In this case the "this" keyword
        // Refers to the global memory and not
        // To the object prototype we made in 
        // the userCreator function

        // We create the "that" variable
        // To make a reference to the this object prototype
        // But it is TOTALLY WRONG
        // let that = this;
        // function add1 () { that.score++; }

        // This is the correct way
        function add1 () { this.score++; }
        add1.call( this );
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