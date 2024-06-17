class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    printStack() {
        console.log(this.items.join(''));
    }
}

function findMiddleUtil(stack, currentIndex, TargetIndex) {
    // Pop the top element
    let topElement = stack.pop();

    // If the currentIndex is the middle index, return the top element
    if (currentIndex === TargetIndex) {
        return topElement;
    }

    // Otherwise, continue to find the middle element
    let middleElement = findMiddleUtil(stack, currentIndex + 1, TargetIndex);

    // Push the top element back onto the stack
    stack.push(topElement);
    return middleElement;
}

function findMiddle(stack) {
    if (stack.isEmpty()) {
        throw new Error("Stack is empty");
    }

    let size = stack.size();
    let targetIndex = Math.floor(size / 2);
    return findMiddle(stack, 0, targetIndex);
}

// Example usage
let stack = new Stack();
[1, 2, 3, 4, 5].forEach(element => stack.push(element));
console.log("Middle element:", findMiddle(stack)); // Output: 3
stack.printStack();  // Output: 1 2 3 4 5


// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     // Push element onto the stack
//     push(element) {
//         this.items.push(element);
//     }

//     // Pop element from the stack
//     pop() {
//         if (this.isEmpty()) {
//             throw new Error("Stack is empty");
//         }
//         return this.items.pop();
//     }

//     // Check if the stack is empty
//     isEmpty() {
//         return this.items.length === 0;
//     }

//     // Get the size of the stack
//     size() {
//         return this.items.length;
//     }

//     // Utility function to print the stack
//     printStack() {
//         console.log(this.items.join(' '));
//     }
// }

// // Helper function to find the middle element
// function findMiddleUtil(stack, currentIndex, targetIndex) {
//     // Pop the top element
//     let topElement = stack.pop();

//     // If the currentIndex is the middle index, return the top element
//     if (currentIndex === targetIndex) {
//         return topElement;
//     }

//     // Otherwise, continue to find the middle element
//     let middleElement = findMiddleUtil(stack, currentIndex + 1, targetIndex);

//     // Push the top element back onto the stack
//     stack.push(topElement);

//     return middleElement;
// }

// // Function to find the middle element of the stack
// function findMiddle(stack) {
//     if (stack.isEmpty()) {
//         throw new Error("Stack is empty");
//     }

//     let size = stack.size();
//     let targetIndex = Math.floor(size / 2);
//     return findMiddleUtil(stack, 0, targetIndex);
// }

// // Example usage
// let stack = new Stack();
// [1, 2, 3, 4, 5].forEach(element => stack.push(element));
// console.log("Middle element:", findMiddle(stack)); // Output: 3
// stack.printStack();  // Output: 1 2 3 4 5
