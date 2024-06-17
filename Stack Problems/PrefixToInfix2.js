function prefixToInfix(prefix) {
    // Reverse the prefix expression
    let reversedPrefix = prefix.split(' ').reverse();

    // Stack to hold operands
    let stack = [];

    // Iterate through each character in the reversed prefix expression
    for (let char of reversedPrefix) {
        if (isOperator(char)) {
            // If character is an operator, pop two operands from stack
            let operand1 = stack.pop();
            let operand2 = stack.pop();

            // Form the infix expression and push back to stack
            let infixExpr = '(' + operand1 + ' ' + char + ' ' + operand2 + ')';
            stack.push(infixExpr);
        } else {
            // If character is an operand, push it to the stack
            stack.push(char);
        }
    }

    // The final expression in the stack is the infix expression
    return stack.pop();
}

// Helper function to check if a character is an operator
function isOperator(char) {
    return ['+', '-', '*', '/', '^'].includes(char);
}

// Example usage:
let prefixExpr = "* + A B - C D";
let infixExpr = prefixToInfix(prefixExpr);
console.log(infixExpr); // Output: "((A + B) * (C - D))"


// Reversing the prefix expression:

// * + A B - C D becomes D C - B A + *
// Using a stack:

// Iterate through each character of the reversed prefix expression.
// If the character is an operand (A, B, C, D), push it onto the stack.
// If the character is an operator (+, -, *, /), pop two operands from the stack, combine them with the operator in infix format, and push the resulting expression back onto the stack.
// Final Result:

// After processing all characters, the stack will contain the infix expression.
// Detailed Steps for the Example:
// Reverse: D C - B A + *
// Process:
// Push D
// Push C
// Encounter -, pop C and D, push (C - D)
// Push B
// Push A
// Encounter +, pop A and B, push (A + B)
// Encounter *, pop (A + B) and (C - D), push ((A + B) * (C - D))
// The resulting stack has ((A + B) * (C - D)), which is the infix expression.

// This approach is straightforward and suitable for beginners to understand the process of converting prefix to infix expressions using a stack and basic string manipulations.