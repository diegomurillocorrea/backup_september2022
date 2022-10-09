class Stack {

    constructor () {
        this._storage = {}
        //this.greeting = "Hello World!"
        this._length = 0
    }

    push ( value ) {
        this._storage[ this._length ] = value
        this._length++
    }

    pop () {
        if ( this._length ) {
            const lastVal = this._storage[this._length - 1]
            delete this._storage[this._length - 1]
            //this._storage[this._length - 1] = undefined this is one way to delete
            this._length--
            return lastVal
        }
    }

    peek () {
        if ( this._length ) {
            return this._storage[this._length - 1]
        }
    }

}

const myStack = new Stack()
console.log( myStack )

myStack.push( "zero" )
myStack.push( "one" )
/*
    { _storage: { 0: "zero", 1: "one" } 
        length: 2
    }
*/

myStack.pop()
/*
    { _storage: { 0: "zero" }
        length: 1
    }
*/

console.log( myStack )