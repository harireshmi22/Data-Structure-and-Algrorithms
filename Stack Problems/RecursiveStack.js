
function reverseStack(stack) {
    if (stack.length === 0) return;

    let temp = stack.pop();
    reverseStack(stack);
    insertBottom(stack, temp);
}

function insertBottom(stack, item) {
    if(stack.length === 0) {
        stack.push(item); 
    } else {
        let temp = stack.pop(); 
        insertBottom(stack, item); 
        stack.push(temp); 
    }
}

// Driver code to test above functions
let stack = [1, 2, 3, 4, 5];
console.log("Original Stack:", stack);

// Function call to reverse the stack
reverseStack(stack);
console.log("Reversed Stack:", stack);
