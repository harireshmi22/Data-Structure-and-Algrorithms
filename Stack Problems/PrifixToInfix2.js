// Function to check if a character is an operator
function isOperator(x) {
    const operators = ['+', '-', '*', '/', '^', '%'];
    return operators.includes(x);
}

// Function to convert a prefix expression to an infix expression
function convertPrefixToInfix(prefix) {
    const stack = [];
    const length = prefix.length;

    // Loop through the string in reverse order
    for (let i = length - 1; i >= 0; i--) {
        const char = prefix[i];

        if (isOperator(char)) {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            const expression = formInfixExpression(operand1, char, operand2);
            stack.push(expression);
        } else {
            stack.push(char);
        }
    }
    return stack.pop();
}

// Helper function to form infix expression
function formInfixExpression(op1, operator, op2) {
    return `(${op1}${operator}${op2})`;
}

// Function to display the result
function displayResult(prefixExpr) {
    const infixExpr = convertPrefixToInfix(prefixExpr);
    document.write(`Infix: ${infixExpr}`);
}

// Example usage
const prefixExpr = "*-A/BC-/AKL";
displayResult(prefixExpr);