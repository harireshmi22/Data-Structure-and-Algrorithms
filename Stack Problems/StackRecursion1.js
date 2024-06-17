class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "No elements in Stack";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

function reverseStack(stack) {
    if (!stack.isEmpty()) {
        // Step 1: Pop the top element
        let temp = stack.pop();

        // Step 2: Reverse the remaining stack
        reverseStack(stack);

        // Step 3: Insert the popped element at the bottom
        insertAtBottom(stack, temp);
    }
}

function insertAtBottom(stack, element) {
    if (stack.isEmpty()) {
        stack.push(element);
    } else {
        // Hold all items in function call stack until we reach the end
        let temp = stack.pop();
        insertAtBottom(stack, element);

        // Once the item is inserted at the bottom, push the held items back
        stack.push(temp);
    }
}

// Example usage:
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log("Original Stack: " + stack.printStack());

reverseStack(stack);

console.log("Reversed Stack: " + stack.printStack());
