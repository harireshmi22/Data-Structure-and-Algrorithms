
function insertBottom(stack, item) {
    if (stack.length === 0) {
        stack.push(item);
    } else {
        // Hold all items in Function call until we reach end of the stack
        let temp = stack.pop();
        insertBottom(stack, item);

        // Once the item is inserted at the bottom, push the held items back 
        stack.push(temp);
    }
}

// Function to reverse the stack using recursion
function reverseBack(stack) {
    if (stack.length > 0) {
        // Hold all items in function call stack until we reach end of the stack 
        let temp = stack.pop();
        reverseBack(stack);

        // Insert each item in call stack at the bottom of the stack 
        insertBottom(stack, temp);
    }
}

// Driver code to test above functions
let stack = [1, 2, 3, 4, 5];
console.log("Original Stack:", stack);

// Function call to reverse the stack
reverseBack(stack);
console.log("Reversed Stack:", stack);

