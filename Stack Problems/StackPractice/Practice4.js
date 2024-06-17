
function isOperator(x) {
    const operator = ['+', '-', '*', '/', '^'];
    return operator.includes(x);
}

function convertPrefixToInfix(prefix) {

    let stack = [];
    let length = prefix.length;

    for (let i = length - 1; i >= 0; i--) {
        let char = prefix[i];
        if (isOperator(char)) {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            const infix = `(${operand1} ${char} ${operand2})`;
            stack.push(infix);
        } else {
            stack.push(char);
        }
    }
    return stack.pop();
}

const prefixExpr = "*-A/BC-/AKL";
const expression = convertPrefixToInfix(prefixExpr);
console.log(expression); 