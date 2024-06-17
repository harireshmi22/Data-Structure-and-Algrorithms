// Function to check if the expression has balanced parentheses
function isBalancedExp(exp) {
    // Create a stack to keep track of opening parentheses
    const stack = [];

    // Loop through each character in the expression
    for (let i = 0; i < exp.length; i++) {
        const char = exp[i];

        // If the character is an opening parenthesis, push it onto the stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
            continue;
        }

        // If the stack is empty and we find a closing parenthesis, it's unbalanced
        if (stack.length === 0) {
            return false;
        }

        // Variable to hold the top element of the stack
        let topElement;

        // Check the type of closing parenthesis and compare with the top of the stack
        switch (char) {
            case ')':
                topElement = stack.pop();
                if (topElement !== '(') {
                    return false;
                }
                break;
            case '}':
                topElement = stack.pop();
                if (topElement !== '{') {
                    return false;
                }
                break;
            case ']':
                topElement = stack.pop();
                if (topElement !== '[') {
                    return false;
                }
                break;
        }
    }

    // If the stack is empty, all parentheses were matched correctly
    return stack.length === 0;
}

// Example usage
const expression = "()[(){()}]";
if (isBalancedExp(expression)) {
    console.log("This is a Balanced Expression");
} else {
    console.log("This is Not a Balanced Expression");
}
