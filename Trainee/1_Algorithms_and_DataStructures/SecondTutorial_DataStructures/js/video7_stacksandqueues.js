const stack = [ 1,2,3,4 ]

stack.push( 5 ) // Set a value at the end of the stack
console.log( stack )

stack.pop() // Remove the last value of the stack
console.log( stack )

const queue = [ 1,2,3,4 ]

queue.enqueue( 5 ) // Set a value at the end of the queue
console.log( queue ) // [ 1,2,3,4,5 ]

queue.dequeue( 5 ) // Remove the first value of the queue
console.log( queue ) // [ 2,3,4,5 ]