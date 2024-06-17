
// Function to check if a character is an operator
function isOperator(x) {
    const operators = ['+', '-', '*', '/', '^', '%'];
    return operators.includes(x);
}

// Function to convert prefix expression to infix expression
function convertPrefixToInfix(prefix) {
    // Stack to hold intermediate results
    const stack = [];

    // Iterate through the prefix expression from right to left
    for (let i = prefix.length - 1; i >= 0; i--) {
        const char = prefix[i];

        if (isOperator(char)) {
            // Pop two operands from the stack
            const op1 = stack.pop();
            const op2 = stack.pop();

            // Form the infix expression
            const infix = `(${op1} ${char} ${op2})`;

            // Push the resulting expression back to the stack
            stack.push(infix);
        } else {
            // Push operand to the stack
            stack.push(char);
        }
    }

    // The final expression in the stack is the infix expression
    return stack.pop();
}

// Example usage

const prefixExpr = "*-A/BC-/AKL";
const infixExpr = convertPrefixToInfix(prefixExpr);
console.log(infixExpr); 