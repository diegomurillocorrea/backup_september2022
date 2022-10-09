// Undefined - Way 1
var isUndefined1 = undefined;
console.log( typeof isundefined1 );

// Undefined - Way 2
var isUndefined2;
console.log( typeof isundefined2 );

// Undeclared -> Undefined
console.log( typeof undefinedVariable );

// Number
var isNumber = 18;
console.log( typeof isNumber );

// String
var isString = "Diego";
console.log( typeof isString );

// Bool
var isBool = true;
console.log( typeof isBool );

// Object
var isObject = {};
console.log( typeof isObject );

// Symbol
var isSymbol = Symbol( "+" );
console.log( typeof isSymbol );

// Function
var isFunction = function(){};
console.log( typeof isFunction );

// Null -> Object
var isNull = null;
console.log( typeof isNull );

// Array -> Object
var isArray = [ 1,2,3,4,5 ]
console.log( typeof isArray );

// BigInt - Way 1
var isBigInt1 = 18n;
console.log( typeof isBigInt1 );

// BigInt - Way 2
var isBigInt2 = BigInt( 18 );
console.log( typeof isBigInt2 );

// NaN
var isNan = Number( "n/a" );
console.log( isNan );