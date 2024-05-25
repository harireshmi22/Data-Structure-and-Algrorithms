

// In this implementation:

// The stack is represented by an array this.items.
// push() is used to add an element to the top of the stack.
// pop() removes and returns the top element of the stack.
// peek() returns the top element without removing it.
// isEmpty() checks if the stack is empty.
// size() returns the number of elements in the stack.
// clear() empties the stack.
// print() prints the elements of the stack.
class Stack {
    constructor() {
        this.items = [];
    }

    push(data) {
        this.items.push(data);
    }

    // Remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            return null;  // If stack is empty
        }
        return this.items.pop();
    }

    // Return the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "No elements in the stack"; // If stack is empty
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }

    // Print the stack
    print() {
        console.log(this.items.toString());
    }
}

// Example usage:
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack size:", stack.size()); // Output: 3
console.log("Top element:", stack.peek()); // Output: 3

console.log("Pop:", stack.pop()); // Output: 3
console.log("Pop:", stack.pop()); // Output: 2

console.log("Is stack empty?", stack.isEmpty()); // Output: false

console.log("Pop:", stack.pop()); // Output: 1
console.log("Is stack empty?", stack.isEmpty()); // Output: true
