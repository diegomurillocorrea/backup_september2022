/* function greetStudent ( student ) {
    console.log(
        // Interpolated strings
        `Hello, ${ student.name } ${ student.lastName }!` 
    );
}

let student = { name: "Mabelinne", lastName: "García" };

greetStudent( student ); */



function timeRemaining ( timeElapsed, endTime ) {
    return (endTime - timeElapsed) / 2;
}

let left = timeRemaining( 42, 140 );

console.log( left );