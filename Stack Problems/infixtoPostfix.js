function infixToPostfix(infix) {
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };

    const isOperator = (c) => ['+', '-', '*', '/', '^'].includes(c);
    const isOperand = (c) => /[a-zA-Z0-9]/.test(c);
    const hasHigherPrecedence = (op1, op2) => precedence[op1] >= precedence[op2];

    let stack = [];
    let postfix = '';

    for (let i = 0; i < infix.length; i++) {
        let char = infix[i];

        if (char === ' ') {
            continue; // Skip whitespace
        }

        if (isOperand(char)) {
            postfix += char;
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                postfix += stack.pop();
            }
            stack.pop(); // Pop the '(' from the stack
        } else if (isOperator(char)) {
            while (stack.length && isOperator(stack[stack.length - 1]) && hasHigherPrecedence(stack[stack.length - 1], char)) {
                postfix += stack.pop();
            }
            stack.push(char);
        }
    }

    while (stack.length) {
        postfix += stack.pop();
    }

    return postfix;
}

// Example usage:
const infixExpression = "a+b*(c^d-e)^(f+g*h)-i";
const postfixExpression = infixToPostfix(infixExpression);
console.log(`Postfix expression: ${postfixExpression}`);


// Explanation:
// Precedence and Helper Functions:

// precedence: An object defining the precedence of operators.
// isOperator: Checks if a character is an operator.
// isOperand: Checks if a character is an operand (letter or digit).
// hasHigherPrecedence: Determines if the operator at the top of the stack has higher or equal precedence compared to the current operator.
// Main Logic:

// Iterate over each character in the infix expression.
// Skip whitespaces.
// If the character is an operand, append it to the postfix result.
// If the character is '(', push it onto the stack.
// If the character is ')', pop from the stack to the postfix result until '(' is encountered.
// If the character is an operator, pop from the stack to the postfix result as long as the top of the stack has an operator with higher or equal precedence, then push the current operator onto the stack.
// Final Steps:

// After iterating through the infix expression, pop all remaining operators in the stack to the postfix result.
// Example:
// For the infix expression "a+b*(c^d-e)^(f+g*h)-i", the output postfix expression would be "abcd^e-fgh*+^*+i-".








