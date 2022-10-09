/* 
EXERCISE

1. Create an object that looks like this:

{ "name": "Rusty", "room": "kitchen", "weapon": "candlestick" }

2. Extract out the weapon and location using destructuring

 */

const { personName, room, weapon } = {
    personName: "Rusty",
    room: "Kitchen",
    weapon: "Candlestick"
};

console.log( personName );
console.log( room );
console.log( weapon );