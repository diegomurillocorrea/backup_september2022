const person = {
    name: "Diego",
    city: "Lourdes",
    state: "La Libertad",
    favoriteFood: "Sea Food",
    wantsFishRightNow: true,
    numberOfFishesWanted: 50,
    address: {
        street: "3",
        pol: "W",
        houseNumber: "22"
    }
};

/* console.log( person );
console.log( person.name ); // way 1
console.log( person[ "state" ] ); // way 2 */

const personCity = "city";
/* console.log( person[ personCity ] );

console.log( person.address[ "street" ] );
console.log( person.address[ "pol" ] ); */

const person1 = {
    name: "Diego",
    ageRange: "16-20"
};

const person2 = {
    name: "Manuel",
    ageRange: "45-55"
}

const person3 = {
    name: "Jose",
    ageRange: "23-30"
}

function suggestMusic ( person ) {
    if ( person.ageRange === "16-20" ) {
        console.log( "You are a good friend of Bad Bunny" );
    } else if ( person.ageRange == "45-55" ) {
        console.log( "You are a good friend of Facundo Cabral" );
    } else {
        console.log( "Maybe you do not have any sense about music" );
    }
}

/* suggestMusic( person1 )
suggestMusic( person2 )
suggestMusic( person3 ) */

const dog = {
    name: "dog",
    speak() {
        console.log( "Woof woof!" );
    }
};

const cat = {
    name: "cat",
    speak() {
        console.log( "Miau miau!" );
    }
};

dog.speak();
cat.speak();

/* YOU CANNOT REPEAT KEYS FROM AN OBJECT, JUST VALUES */