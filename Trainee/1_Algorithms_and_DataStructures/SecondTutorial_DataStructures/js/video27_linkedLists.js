/* Class representing a Linked List */

class LinkedList {
    constructor ( value ) {
        //this._storage = {}
        this.head = { value, next: null }
        this.tail = this.head // this the same value as head
    }

    /*
    - Inserts a new value to the end of the linked list
    - @param { * } value - the value to insert
    */
    insert ( value ) {
        // update tail
        const node = { value, next: null }
        this.tail.next = node
        this.tail = node
    }

    /*
    Deletes a node
    - @param { * } node - the node to remove
    - @return { * } value - the delete's node value
    */
    remove () {

    }

    /*
    Removes the value at the end of the linked list
    - @return { * } - the removed value
    */
    removeTail () {
        // loop and find the node before the tail!
        // node.next === this.tail
        let currentNode = this.head
        while ( currentNode.next !== this.tail ) {
            currentNode = currentNode.next
        }

        currentNode.next = null
        this.tail = currentNode
    }

    /*
    Searches the linked list and returns true if it contains
    the value passed
    - @param { * } value - the value to search for
    - @return { boolean } - true if value is found, otherwise false
    */
    constains ( value ) {
        let currentNode = this.head
        while ( currentNode.value !== value ) {
            currentNode = currentNode.next
        }
        return currentNode.value === value
    }

    /*
    Checks if a node is the head of the linked list
    - @param { { prev: Object | null, next: Object | null } } node - the node to check
    - @return { boolean } - true if node is the head, otherwise false
    */
    isHead ( node ) {
        return node === this.head
    }

    /*
    Checks if a node is the tail of the linked list
    - @param { { prev: Object | null, next: Object | null } } node - the node to check
    - @return { boolean } - true if node is the tail, otherwise false
    */
    isTail () {
        return node === this.tail
    }
}

const myList = new LinkedList(1)

myList.insert( 2 )

myList.insert( 3 )

console.log( myList )

myList.removeTail()

console.log( myList )


// don't do this: myList._storage