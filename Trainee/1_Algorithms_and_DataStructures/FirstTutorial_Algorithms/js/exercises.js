/* Video 6 */
var countChars = function(str){
    var count = 0; // operations = 1

    for(var i = 0; i < str.length; i++){
        count++; // operations = 5 
    }

    return count; // operations = 1
};
//console.log(countChars("walkreallyfast")) => 14

/* Video 7 */
var countChars = function(str){
    return str.length
}
//console.log(countChars("Diego")) => 5

/* Video 8 */
// calculate the TC for the 
// native methods (separately)
var myList = ["hello", "hola"]
//myList.push("bounjour") -> This adds a value at the end of the array
//myList.unshift() -> This deletes the value which is at the end of the array
//myList.shift() -> This deletes the value which is at the beginning of the array
//console.log(myList);

/* Video 9 */
/*
const isUnique = (arr) => {
    let result = true

    for (let i = 0; i < arr.length; i++) {
        console.log(`----- OUTER LOOP ----- i === ${i}`)

        for (let j = 0; j < arr.length; j++) {
            console.log(`----- INNER LOOP ----- j === ${j}`)
            if (i !== j && arr[i] === arr[j]) {
                result = false
            }
        }
    }

    return result
}
*/
/*console.log(isUnique([1,2,3]) === true)
console.log(isUnique([1,1,3]) === false)*/

// A better way to do this

const isUnique = ( arr ) => {
    const breadcrumbs = {}
    let result = true

    for ( let i = 0 ; i < arr.length ; i++ ) {
        console.log(`--- LOOP --- i === ${i}`);
        if ( breadcrumbs[arr[i]]) {
            result = false
        } else {
            breadcrumbs[arr[i]] = true
        }
    }

    return result
}

console.log(isUnique([1,2,3]) === true)