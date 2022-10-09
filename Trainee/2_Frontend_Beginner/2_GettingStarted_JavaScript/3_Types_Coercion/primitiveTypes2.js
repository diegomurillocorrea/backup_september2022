console.log( typeof doesntExist );

let v = null;
console.log( typeof v );

v = function (){};
console.log( typeof v ); // subtype of object

v = [ 1,2,3 ];
console.log( typeof v );