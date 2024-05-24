
// Implementation of Queue using Stack 

class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    // Enqueue Operation 
    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        if (this.stack2.length === 0) {
            return null; // Queue is empty
        }
        return this.stack2.pop();
    }

    // Check if the queue is empty
    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.stack1.length + this.stack2.length;
    }

    // Peek the front element of the queue
    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        if (this.stack2.length === 0) {
            return null;
        }

        return this.stack2[this.stack2.length - 1];
    }
}

// Example usage:
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log(queue.dequeue());  // Output: 10
console.log(queue.peek());  // Output: 20
console.log(queue.isEmpty()); // Output: false
console.log(queue.size()); // Output: 2
queue.enqueue(50);
console.log(queue.dequeue());  // Output: 20
console.log(queue.dequeue());  // Output: 30
console.log(queue.dequeue()); // Output: 40
console.log(queue.isEmpty()); // Output: true

