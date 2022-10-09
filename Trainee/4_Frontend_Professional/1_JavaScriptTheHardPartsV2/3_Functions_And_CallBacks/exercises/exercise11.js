/*
Construct a function objectFilter that accepts: 
- An object as the first parameter
- A callback function as the second parameter

objectFilter will return a new object

The new object will contain only the properties from the input object 
such that the property's value is equal to the property's key passed 
into the callback.

*/

function objectFilter ( object, callback ) {
    return callback( object );
}

var obj = {
    name: "Diego",
    secondName: "Enrique",
    lastName: "Murillo",
    veryLastName: "Correa",
    height: 1.75,
    weight: 200,
    age: 18,
    work: "Frontend Developer Trainee",
    study: "Technical Software Engineer",
    urbanization: "Villa Lourdes",
    city: "Colón",
    state: "La Libertad",
};

function CB ( object ) {

    var newObject = {};
    var objectValues = Object.values( object );
    var arrayProperties = objectValues;
    var objectProperties = Object.keys( object );
    var arrayValues = objectProperties;

    for ( let i = 0 ; i < ( arrayProperties.length && arrayValues.length ) ; i++ ) {
        newObject[ arrayProperties[ i ] ] = arrayValues[ i ];
    }

    return newObject;
}

console.log(
    objectFilter( obj, CB )
);