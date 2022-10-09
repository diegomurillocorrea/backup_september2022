const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

/* console.log( daysOfTheWeek );
console.log( daysOfTheWeek[ 0 ] );
console.log( daysOfTheWeek[ 1 ] );
console.log( daysOfTheWeek[ 6 ] ); */

const primeNumbers = [ 1,2,3,5,7,11,13,17 ];
/* console.log( primeNumbers.length );
console.log( primeNumbers.join( " | " ) ); */

const courses = [
    { teacher: "Gerardo Melgar", course: "English" },
    { teacher: "Ricardo Interiano", course: "ICT" },
    { teacher: "Rocío Rodezno", course: "Values" },
    { teacher: "Cesar Ramírez", course: "ReactJS" }
];

/* console.log( courses[0] );
courses.push( { teacher: "Josue Fortis", course: "Bussiness Administrator" } );
courses[3].course = "Software Development";
console.log( courses ); */

const cities = [
    "Seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong"
];

for ( let i = 0 ; i < cities.length ; i++ ) {
    //console.log( cities[ i ] );
}

// METHOD -> A FUNCTION ON AN OBJECT

cities.forEach ( function( city ) { // THIS IS AN ANONYMUS FUNCTION
        //console.log( city );
    }
)

const daysOfTheWeekV2 = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

daysOfTheWeekV2.forEach(
    function( days, index ){
        console.log( index, days );
    }
);