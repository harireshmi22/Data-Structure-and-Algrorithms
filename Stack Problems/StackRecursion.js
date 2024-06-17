class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "underflow";
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty())
            return;
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

function reverse(stack) {
    if (!stack.isEmpty()) {
        let temp = stack.pop();
        reverse(stack);

        // Step 3: Insert the popped element at the bottom
        insertBottom(stack, temp);
    }
}

function insertBottom(stack, element) {
    if (stack.isEmpty()) {
        stack.push(element);
    } else {
        let temp = stack.pop();
        insertBottom(stack, element);

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

reverse(stack);

console.log("Reversed Stack: " + stack.printStack());