/* Class representing a Linked List */

class HashTable {
    constructor ( val ) {
        this._storage = []
        this._tableSize = val
        this._inputSize = 0
    }

    /*
    Inserts a new key-value pair
    - @param { string } key - they key associated with the value
    - @param { * } value - the value to insert
    */
    insert ( key, value ) {
        const index = this._hash( key, this._tableSize )

        if ( !this._storage[ index ] ) {
            this._storage[ index ] = []
        }

        this._storage[ index ].push( [ key, value ] )
    } 

    /*
    Deletes a key-value pair
    - @param { string } key - they key associated with the value
    - @return { * } value - the deleted value
    */
    remove () {

    }

    /*
    Returns  the value associated with a key
    - @param { string } key - they key to search for
    - @return { * } value - the value associated with the key
    */
    retrieve ( key ) {
        const index = this._hash( key, this._tableSize )
        const arrayAtIndex = this._storage[ index ]

        if ( arrayAtIndex ) {
            for ( let i = 0 ; i < arrayAtIndex.length ; i++ ) {
                const keyValueArray = arrayAtIndex[ i ]
                if ( keyValueArray[ 0 ] === key ) return keyValueArray[ 1 ]
            }
        }

    }

    /*
    Searches the linked list and returns true if it contains
    the value passed
    - @param { * } value - the value to search for
    - @return { boolean } - true if value is found, otherwise false
    */
    
    _hash ( str, n ) {
        let sum = 0
        for ( let i = 0 ; i < str.length ; i++ )
            sum += str.charCodeAt( i ) * 3

        return sum % n  
    }

}

const myHT = new HashTable( 25 )

myHT.insert( "a", 1 )

myHT.insert( "b", 2 )

console.log( myHT )