class People {
    constructor ( name, lastName, age, gender ) {
        this._name = name;
        this._lastName = lastName;
        this._age = age;
        this._gender = gender;
    }

    // These are getter methods
    get fullName () {
        return `${ this._name } ${ this._lastName }`;
    }

    get completePersonInformation () {
        return `${ this._name } ${ this._lastName } is ${ this._age } years old and ${ this._name } is a ${ this._gender }`;
    }

    get nextYearPersonAge () {
        return `Next year, ${ this._name } ${ this._lastName } would be ${ this._age } years old`;
    }

    // This is a simple method
    nextYearAge () {
        this._age++;
    }
}

const person1 = new People( "Diego", "Murillo", 18, "man" );
const person2 = new People( "Mabelinne", "García", 16, "woman" );

person1.nextYearAge();

console.log( person1.nextYearPersonAge );