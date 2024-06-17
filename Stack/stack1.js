// Explanation:
// Initialization: The Stack class is initialized with a capacity, an array stack to hold the elements, and a top pointer initialized to -1 to indicate the stack is empty.
// isEmpty: Checks if the stack is empty by verifying if top is -1.
// isFull: Checks if the stack is full by verifying if top is equal to capacity - 1.
// push: Adds an element to the stack. It first checks if the stack is full, then increments the top pointer and adds the element to the array.
// pop: Removes and returns the top element from the stack. It first checks if the stack is empty, then retrieves the top element, clears the slot, and decrements the top pointer.
// peek: Returns the top element without removing it. It checks if the stack is empty before returning the top element.
// size: Returns the number of elements in the stack by returning top + 1.
// This JavaScript implementation follows the same principles as the Python version, ensuring efficient stack operations with O(1) time complexity for both push and pop operations.

class Stack {
    constructor() {
        this.capacity = this.capacity; // Maximum size of the stack
        this.arr = new Array(this.capacity); // Initialize the stack with undefined values
        this.top = -1; // Initialize the top pointer
    }

    isEmpty() {
        return this.top === - 1;
    }

    isFull() {
        return this.top === this.capacity - 1;
    }

    push(item) {
        if (this.isFull()) {
            return "Stack is full";
        }

        this.arr[++this.top] = item;
        console.log(`Pushed ${item} to stack`);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is underflow";
        }

        const item = this.arr[this.top]; // Clear the slot (optional)
        this.arr[this.top--] = undefined;
        console.log(`Popped ${item} from stack`);
        return item;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Peek from empty stack");
        }
        return this.arr[this.top];
    }

    size() {
        return this.top + 1;
    }
}

// Example usage:
const stack = new Stack(5);  // Create a stack with a capacity of 5
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Top element is:", stack.peek());  // Output: Top element is: 30
console.log("Stack size is:", stack.size());  // Output: Stack size is: 3
stack.pop();  // Output: Popped 30 from stack
stack.pop();  // Output: Popped 20 from stack
console.log("Stack size is:", stack.size());  // Output: Stack size is: 1

// question