function userCreator ( name, score ) {
    this.name = name;
    this.score = score;
}

userCreator.prototype.increment = function () { this.score++; };
userCreator.prototype.login = () => () => { console.log( "Login" ); };

// The "new" keyword is returning the values that
// The userCreator function 
const user1 = new userCreator( "Diego", 17 );

user1.increment();

console.log( user1 );
user1.login();