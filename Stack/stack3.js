
// Implement two Stacks in an Array


// Explanation:
// Constructor:

// Initializes the capacity of the array and creates an array with the specified capacity.
// Sets the top indices of both stacks to appropriate initial values.
// Push Operations:

// push1(value): Pushes an element onto stack 1 if there is space available.
// push2(value): Pushes an element onto stack 2 if there is space available.
// Pop Operations:

// pop1(): Pops the top element from stack 1 if stack 1 is not empty.
// pop2(): Pops the top element from stack 2 if stack 2 is not empty.
// isEmpty Methods:

// isEmpty1(): Checks if stack 1 is empty.
// isEmpty2(): Checks if stack 2 is empty.
// Peek Methods:

// peek1(): Returns the top element of stack 1 without removing it.
// peek2(): Returns the top element of stack 2 without removing it.
// This implementation ensures that each stack operates independently within its allocated space in the array.

class TwoStacks {

    constructor(capacity) {
        this.capacity = capacity;
        this.array = new Array(capacity);
        this.top1 = -1; // Top index of stack 1
        this.top2 = capacity; // Top index of stack 2
    }

    // Push element onto stack1 
    push1(value) {
        if (this.top1 < this.top2 - 1) {
            this.array[++this.top1] = value;
        } else {
            console.log("Stack 1 overflow");
        }
    }

    // Push element onto stack 2
    push2(value) {
        if (this.top1 < this.top2 - 1) {
            this.array[--this.top2] = value;
        } else {
            console.log("Stack 2 overflow");
        }
    }

    // Pop element from stack 1
    pop1() {
        if (this.top1 >= 0) {
            let value = this.array[this.top1];
            this.array[this.top1--] = undefined;
            return value;
        } else {
            console.log("Stack 1 underflow");
            return undefined;
        }
    }

    // Pop element from stack 2
    pop2() {
        if (this.top2 < this.capacity) {
            let value = this.array[this.top2];
            this.array[this.top2++] = undefined;
            return value;
        } else {
            console.log("Stack 2 underflow");
            return undefined;
        }
    }

    // Check if stack 1 is empty 
    isEmpty() {
        return this.top1 === -1;
    }

    isEmpty2() {
        return this.top1 === -1;
    }

    // Get the top element of stack 1
    peek1() {
        if (!this.isEmpty) {
            return this.array[this.top1];
        } else {
            console.log("Stack 1 Empty");
            return undefined;
        }
    }

    // Get the top element of stack 2
    peek2() {
        if (!this.isEmpty2()) {
            return this.array[this.top2];
        } else {
            console.log("Stack 2 is empty");
            return undefined;
        }
    }
}

// Example usage:
let twoStacks = new TwoStacks(5);
twoStacks.push1(10);
twoStacks.push1(20);
twoStacks.push2(30);
twoStacks.push2(40);
console.log(twoStacks.pop1()); // Output: 20
console.log(twoStacks.pop2()); // Output: 40
console.log(twoStacks.peek1()); // Output: 10
console.log(twoStacks.peek2()); // Output: 30