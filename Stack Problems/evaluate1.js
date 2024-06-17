

// Javascript program to evaluate value of a postfix expression

// Method to evaluate value of a postfix expression
function evaluatePostfix(exp) {
    //create a stack
    let stack = [];

    // Scan all characters one by one
    for (let i = 0; i < exp.length; i++) {
        let c = exp[i];

        // If the scanned character is an operand (number here),
        // push it to the stack.
        if (!isNaN(parseInt(c)))
            stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));

        // If the scanned character is an operator, pop two
        // elements from stack apply the operator
        else {
            let val1 = stack.pop();
            let val2 = stack.pop();

            switch (c) {
                case '+':
                    stack.push(val2 + val1);
                    break;

                case '-':
                    stack.push(val2 - val1);
                    break;

                case '/':
                    stack.push(val2 / val1);
                    break;

                case '*':
                    stack.push(val2 * val1);
                    break;
            }
        }
    }
    return stack.pop();
}

// Driver program to test above functions
let exp = "231*+9-";
console.log("postfix evaluation: " + evaluatePostfix(exp));

