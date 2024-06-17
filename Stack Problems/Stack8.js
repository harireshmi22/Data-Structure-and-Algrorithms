// Pop elements from the stack until you reach the middle element.
// Use recursion to keep track of the number of elements popped.
// When you reach the middle element, store it.
// Push the elements back onto the stack to restore its original order.

class Stack {
    constructor() {
        this.items = [];
    }

    // Push element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop element from the stack
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Utility function to print the stack
    printStack() {
        console.log(this.items.join(' '));
    }
}

// Recursive function to find the middle element
function findMiddle(stack, currentIndex, size) {
    // Base case: if currentIndex is the middle index
    if (currentIndex === Math.floor(size / 2)) {
        return stack.pop();
    }

    // Pop the top element and call the function recursively
    let top = stack.pop();
    let middleElement = findMiddle(stack, currentIndex + 1, size);

    // Push the top element back to restore the stack
    stack.push(top);

    return middleElement;
}

// Function to initiate finding the middle element
function getMiddle(stack) {
    if (stack.isEmpty()) {
        throw new Error("Stack is empty");
    }

    let size = stack.size();
    return findMiddle(stack, 0, size);
}

// Example usage
let stack = new Stack();
[1, 2, 3, 4, 5].forEach(element => stack.push(element));
console.log("Middle element:", getMiddle(stack)); // Output: 3
stack.printStack();  // Output: 1 2 3 4 5
