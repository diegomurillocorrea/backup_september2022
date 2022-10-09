const multiplyBy2 = num => {
    return num * 2;
}

multiplyBy2.stored = 5;

console.log( multiplyBy2( 3 ) ); // 6

console.log( multiplyBy2.stored ); // 5

multiplyBy2.prototype;