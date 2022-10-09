const me = {
    person: {
        name: "Diego",
        lastName: "Murillo",
        age: 18
    },
    address: {
        country: "El Salvador",
        state: "La Libertad",
        city: "Lourdes Colón",
        urbanization: "Villa Lourdes",
        street: "3",
        pol: "W",
        numberHouse: "22"
    },
    getPersonInformation() {
        return `${ this.person.name } ${ this.person.lastName } is ${ this.person.age } years old`;
    },
    getAddress() {
        return `${ this.address.country }, ${ this.address.state }, ${ this.address.city }`;
    },
    getCompleteAddress() {
        return `${ this.address.urbanization }, street ${ this.address.street }, pol ${ this.address.pol }, number house ${ this.address.numberHouse }, ${ this.address.city }`;
    }
};

console.log( me.getPersonInformation() );
console.log( me.getAddress() );
console.log( me.getCompleteAddress() );

// this === window -> true, because is all the js you are developing
// this === global( in nodeJS ) -> true, because is all the js you are developing

// this will tell you how many pixels you are in the Y position
console.log( this.scrollY ); // way 1
console.log( window.scrollY ); // way 2