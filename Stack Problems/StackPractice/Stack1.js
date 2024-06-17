
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
        console.log(this.items.join(' '));
    }
}

function findMiddleUtil(stack, count, targetIndex) {
    // Pop the top element
    let toppedElement = stack.pop();

    if (count === targetIndex) {
        return toppedElement;
    }

    let middleElement = findMiddleUtil(stack, count + 1, targetIndex);

    stack.push(toppedElement);

    return middleElement;
}

function findMiddle(stack) {
    if (stack.isEmpty()) {
        throw new Error("Stack is empty");
    }

    let size = stack.size();
    let targetIndex = Math.floor(size / 2);
    return findMiddleUtil(stack, 0, targetIndex);
}

// Example usage
let stack = new Stack();
[1, 2, 3, 4, 5].forEach(element => stack.push(element));
console.log("Middle element:", findMiddle(stack)); // Output: 3
stack.printStack();  // Output: 1 2 3 4 5
