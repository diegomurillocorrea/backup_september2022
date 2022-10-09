const user1 = {
    name: "Diego",
    score: 3,
    increment: function () { return user1.score + 1 }
};

/* console.log(
    user1.increment()
); */

const user2 = {};

user2.name = "Enrique";
user2.score = 6;
user2.increment = function () {
    return user2.score++;
};