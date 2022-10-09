/*
1.  Define an addFavouriteBook() function that receives a
    single parameter, called bookName.

2.  If the provided bookName string does NOT have the word
    "Great" in it, add it to the favoriteBooks array.

    Hints:
    - someString.includes( anotherString ) will return true
    if anotherString is found inside someString, or false
    otherwise

    - Use ! to negate a boolean value ( change true to false 
    or vice versa  )

    - someArray.push( value ) will add a value to the end of
    the array

3.  Define a printFavouriteBooks() function that receives no
    parameters

4.  printFavouriteBooks() should first print a message like
    "Favourite Books: ..", and include the number of books in the
    favouriteBooks array.

    Hint:
    - Use the `` back-tick operators for strings that need to include 
    values in them

    - Use console.log() to print a message to the screen

5.  Finally, printFavouriteBooks() should loop through the 
    favouriteBooks array and print out each value

    Make sure to then call the printFavouriteBooks() function
    at the end of the program.
*/

function addFavouriteBook ( bookName ) {
    if ( !bookName.includes( "Great" ) ) {
        favoriteBooks.push( bookName );
    }
}

function printFavouriteBooks () {
    console.log( `Favourite Books: ${ favoriteBooks.length }` );
    for ( let bookName of favoriteBooks ) {
        console.log( bookName );
    }
}

let favoriteBooks = [];

addFavouriteBook( "A Song Of Ice and Fire" );
addFavouriteBook( "The Great Gatsby" );
addFavouriteBook( "Crime & Punishment" );
addFavouriteBook( "Great Expectations" );
addFavouriteBook( "You Don't Know JS" );

printFavouriteBooks();