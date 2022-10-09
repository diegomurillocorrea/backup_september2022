function makeCounter () {
    var counter = 0;
    return function increment () {
        return ++counter;
    };
}

var c = makeCounter();

console.log(
    c()
);

console.log(
    c()
);

console.log(
    c()
);