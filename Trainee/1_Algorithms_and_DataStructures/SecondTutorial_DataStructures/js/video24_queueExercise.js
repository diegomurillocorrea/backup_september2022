class Queue {

    constructor () {
        this._storage = {}
        this._length = 0
        this._headIndex = 0
    }

    enqueue ( value ) {
        const lastIndex = this._length + this._headIndex
        this._storage[ lastIndex ] = value
        this._length++
        //this._headIndex++
    }

    dequeue () {
        if ( this._length ) {
            const firstVal = this._storage[this._headIndex]
            delete this._storage[this._headIndex]
            //this._storage[this._length - 1] = undefined this is one way to delete
            this._length--
            this._headIndex++
            return firstVal
        }
    }

    peek () {
        if ( this._length ) {
            return this._storage[this._length - 1]
        }
    }

}

let myQ = new Queue()
//console.log( myQ )

myQ.enqueue( "zero" )
myQ.enqueue( "one" )
/*
    { _storage: { 0: "zero", 1: "one" } 
        length: 2
        headIndex: 0
    }
*/

myQ.dequeue()
/*
    { _storage: { 1: "one" }
        length: 1
        headIndex: 1
    }
*/

myQ.enqueue( "two" )
/*
    { _storage: { 1: "one", 2:"two" }
        length: 2
        headIndex: 1
    }
*/

console.log( myQ )