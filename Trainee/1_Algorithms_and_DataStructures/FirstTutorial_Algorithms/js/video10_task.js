//Task: Transform this simple sorting algorithm into a unique sort.
//It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => [1,2,5]
//input: [4,2,2,3,2,2,2] => [2,3,4]

const uniqSort = function(arr) {
    // you declare this object to assign a boolean value to the result of the for loop
    // if any of the values turn false, that value will be not printed
    const breadcrumbs = {}

    // this array will set the foor loop value (if condition applies) to the end of the arr parameter
    const uniqArr = []

    // linear TC
    for ( let i = 0 ; i < arr.length ; i++ ) { // this for loop will be incrementing its own value to assign it in the array
        if ( !breadcrumbs[ arr[i] ] ) { // if there is no a number of the arr array CONSTANT
            breadcrumbs[ arr[i] ] = true // then it will say YES CONSTANT TC
            uniqArr.push( arr[i] ) // and it will set it at the end of the arr array CONSTANT TC
        }
    }

    // Here we realize about each key and its value
    console.log(breadcrumbs) 

    // it depends how you want them to be organized -> minor - mayor or mayor - minor
    return uniqArr.sort( (a,b) => a - b ) // logn TC
}
console.log(uniqSort( [8,9,5,4,0,3,2,1,6,9,9,7,5,3] ) )