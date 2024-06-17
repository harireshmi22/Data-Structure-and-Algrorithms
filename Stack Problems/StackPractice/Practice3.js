
function infixtoPostfix(infix) {

    let stack = [];
    let postfix = '';

    for (let i = 0; i < infix.length - 1; i++) {
        let char = infix[i];

        if (char === '') {
            continue;
        }

        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
            postfix = postfix + char;
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                postfix = postfix + stack.pop();
            }
            stack.pop();

        } else if (['+', '-', '*', '/'].includes(char)) {
            while (stack.length > 0 && stack[stack.length - 1] >= precedence(char)) {
                postfix = postfix + stack.pop();
            }
            stack.push(char);
        }
    }

    while (stack.length > 0) {
        postfix = postfix + stack.pop();
    }

    return postfix;
}


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