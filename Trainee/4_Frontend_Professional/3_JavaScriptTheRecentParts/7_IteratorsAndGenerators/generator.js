// the * operator becomes the main() function, a generator
function *main () {
    // the keyword yield allows a generator
    // to produce aditional values every time
    // it's itetated over
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

var it = main();

it.next(); // { value: 1, done: false }
it.next(); // { value: 2, done: false }
it.next(); // { value: 3, done: false }
it.next(); // { value: 4, done: true }

[ ...main() ];
// [ 1,2,3 ]