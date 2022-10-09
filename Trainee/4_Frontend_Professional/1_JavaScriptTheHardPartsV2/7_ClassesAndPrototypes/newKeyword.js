function userCreator ( name, score ) {
    this.name = name;
    this.score = score;
};

userCreator.prototype; // -> {}
// The ".increment" is a new value to the useCreator function object
userCreator.prototype.increment = function () { this.score++; }

const user1 = new userCreator( "Diego", 17 );
user1.increment();

console.log( user1 );