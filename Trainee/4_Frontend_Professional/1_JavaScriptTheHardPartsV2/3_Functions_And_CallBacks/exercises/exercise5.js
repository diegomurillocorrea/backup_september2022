/*

In challenge 3, you've created a function called map. 
In this challenge, you're going to rebuild the map function 
by creating a function called mapWith. 
This time you're going to use forEach inside of mapWith instead 
of using a for loop.

*/

let company = '';

const letters = [ 'e','l','a','n','i','i','n' ];

const mapWith = array => {
    array.forEach( element => {
        return company += element;
    });
}

mapWith( letters );

console.log( company );