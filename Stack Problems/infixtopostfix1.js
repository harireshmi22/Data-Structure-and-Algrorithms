
function infixtoPostfix(infix) {

    let stack = [];
    let postfix = '';

    // traverse given infix 
    for (let i = 0; i < infix.length; i++) {
        let char = infix[i];

        if (char === '') {
            continue; // skip cases 
        }

        if (/[a-zA-Z0-9]/.test(char)) {
            // If the character is an operand, add it to the postfix expression
            postfix = postfix + char;
        } else if (char === '(') {
            // If the character is '(', push it to the stack
            stack.push(char);
        } else if (char === ')') {
            // If the character is ')', pop and add to the postfix expression until '(' is encountered
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                postfix = postfix + stack.pop();
            }

            stack.pop(); // Pop '(' from the stack
        } else if (['+', '-', '*', '/', '^'].includes(char)) {
            // If the character is an operator
            while (stack.length > 0 && precedence(stack[stack.length - 1]) >= precedence(char)) {
                postfix = postfix + stack.pop();
            }
            stack.push(char);
        }
    }
    // Pop all the operators left in the stack
    while (stack.length > 0) {
        postfix = postfix + stack.pop();
    }
    return postfix;
}

// Op full form operators
function precedence(op) {

    if (op === '+' || op === '-') {
        return 1;
    } else if (op === '*' || op === '/') {
        return 2;
    } else if (op === '^') {
        return 3;
    }
    return 0;
}

const infixExpression = "a+b*(c^d-e)^(f+g*h)-i";
const postfixExpression = infixtoPostfix(infixExpression);
console.log(`Postfix expression: ${postfixExpression}`); 