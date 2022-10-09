// This is how normal destructuring was

function data () {
    return [ 1,2,3,4,5 ];
}

var tmp = data();
var first, second, third, fourth;
first = tmp[ 0 ];
//var second = tmp[ 1 ] !== undefined ? tmp[ 1 ] : 10;
second = tmp[ 1 ]
third = tmp[ 2 ];
// If there is no 3 index, fourth will return an empty array because of slice()
fourth = tmp.slice( 3 );

var o = {};
o.first = tmp[ 0 ];
o.second = tmp[ 1 ];
o.third = tmp[ 2 ];
o.fourth = tmp.slice( 3 );
 
// This is how recent destructuring is

function data2 () {
    return [ 1,2,3,4,5 ];
}

var first, second, third, fourth;
var o = {};

[
    o.first,
    // second = 10,
    ,// array elision
    o.second,
    o.third,
    // If there is no fourth value from index, 
    // fourth will return an empty array because of "..." operator
    ...o.fourth
] = data2();



/*
This would be useful if we try to assign the destructuring process
To the tmp2 variable, but it is not necessary 
var tmp2;
var [
    first,
    // second = 10,
    second,
    third,
    // If there is no fourth value from index, 
    // fourth will return an empty array because of "..." operator
    ...fourth
] = tmp = data2(); */