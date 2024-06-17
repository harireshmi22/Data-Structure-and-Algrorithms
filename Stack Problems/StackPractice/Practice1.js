
function infixtoPostfix(infix) {

    let stack = [];
    let postfix = '';

    for (let i = 0; i < infix.length; i++) {
        let char = infix[i];

        if (char === '') {
            continue;
        }

        if (/[a-zA-Z0-9]/.test(char)) {
            // If the character is an operand, add it to the postfix expression
            postfix += char;
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                postfix = postfix + stack.pop();
            }
            stack.pop();
        } else if (['+', '-', '*', '/', '^'].includes(char)) {
            while (stack.length > 0 && precedence(stack[stack.length - 1]) >= precedence(char)) {
                postfix = postfix + stack.pop();
            }
            stack.push(char);
        }
    }

    // Pop all the operators left in the stack
    while (stack.length > 0) {
        postfix += stack.pop();
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